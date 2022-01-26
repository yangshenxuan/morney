const localStorageKey = "recordList";
const recordListModel = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKey) || "[]") as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  },
};
export default recordListModel;
