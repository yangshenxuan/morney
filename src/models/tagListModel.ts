const localStorageKey = "tagList";
type TagListModel = {
    data: string[]
    fetch: () => string[]
    create: (name: string) => 'success' | 'duplicated' | 'space'
    save: () => void

}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKey) || "[]");
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKey, JSON.stringify(this.data));
    },
    create(name) {
        if (this.data.indexOf(name) >= 0) { return 'duplicated' }
        if (name === ' ' || name === '  ' || name === '   ') { return 'space' }
        this.data.push(name)
        this.save()
        return 'success'
    }
};
export default tagListModel;
