<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" />
      <div>
        <ol>
          <li v-for="group in groupedList" :key="group.title">
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
      </div>
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
  components: { Tabs },
})
export default class Statistics extends Vue {
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

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    type HashTableValue = { title: string; items: RecordItem[] };

    // const hasTable: { title: string; item: RecordItem[] }[];
    const newList = clone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    const result = [
      {
        title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 0; i < newList.length; i++) {
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
    return tags.length === 0 ? "无" : tags.join(",");
  }
  intervalList = intervalList;
  typeList = typeList;
  type = "-";
  interval = "day";
}
</script>

<style lang="scss" scoped>
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
</style>