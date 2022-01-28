import clone from "@/lib/clone"

const localStorageKey = "recordList";

const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKey) || "[]") as RecordItem[];
        return this.recordList
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKey, JSON.stringify(this.recordList));
    },
    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.time = new Date();
        this.recordList?.push(record2);
        recordStore.saveRecords()
    },
}

recordStore.fetchRecords();
export default recordStore