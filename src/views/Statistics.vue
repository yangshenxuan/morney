<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" />
      <div class="chart-Wrapper" ref="chartWrapper">
        <v-chart class="chart" :option="option" />
      </div>
      <ol v-if="groupedList.length > 0">
        <li v-for="(group, index) in groupedList" :key="index">
          <h3 class="title">{{ beautify(group.title) }}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <div>
                <span>{{ tagString(item.tags) }}</span>
                <span class="notes">{{ item.notes }}</span>
              </div>
              <span>￥{{ item.pad }}</span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="noResult">目前没有相关记录</div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList";
import typeList from "@/constants/typeList";
import dayjs from "dayjs";
import clone from "@/lib/clone";
import "echarts/lib/component/dataZoom";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
};
type Tag = {
  id: string;
  name: string;
};
@Component({
  components: { Tabs, VChart },
})
export default class Statistics extends Vue {
  mounted() {
    const div = this.$refs.chartWrapper as HTMLDivElement;
    div.scrollLeft = div.scrollWidth;
  }
  beautify(string: string) {
    const now = dayjs();
    const day = dayjs(string);
    if (dayjs(string).isSame(now, "day")) {
      return "今天";
    } else if (dayjs(string).isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (dayjs(string).isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("MM月D日");
    } else {
      return day.format("YYYY年MM月D日");
    }
  }
  get option() {
    return {
      grid: {
        left: 0,
        right: 0,
        top: 0,
      },
      xAxis: {
        type: "category",
        data: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "1",
          "2",
          "3",
          "4",
          "5",
          "1",
          "2",
          "3",
          "4",
          "5",
        ],
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: [
            150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147,
            260, 150, 230, 224, 218, 135, 147, 260,
          ],
          type: "line",
          symbolSize: 15,
          color: "#2dcf5d",
        },
      ],
      tooltip: { show: true },
    };
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const { recordList } = this;

    const newList = clone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    if (newList.length === 0) {
      return [];
    }
    type Result = { title: string; total?: number; items: RecordItem[] }[];
    const result: Result = [
      {
        title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdAt).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }

    return result;
  }

  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.map((t) => t.name).join("，");
  }
  intervalList = intervalList;
  typeList = typeList;
  type = "-";
  interval = "day";
}
</script>

<style lang="scss" scoped>
.noResult {
  padding: 16px;
  text-align: center;
}
::v-deep {
  .type-item {
    background: #c4c4c4;
    &.selected {
      background: #2dcf5d;
      &::after {
        display: none;
      }
    }
  }
}
%item {
  padding: 4px 16px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: white;
}
.notes {
  margin: 0 auto 0 15px;
}
.chart {
  height: 40vh;
  width: 400%;
  &-Wrapper {
    overflow: auto;
  }
}
</style>

