import clone from "@/lib/clone";

const localStorageKey = "recordList";
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.time = new Date();
    this.data.push(record2);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKey) || "[]") as RecordItem[];
    return this.data
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  },
};
export default recordListModel;
