const localStorageKey = "tagList";
type Tag = {
    id: string,
    name: string
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
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
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push({ id: name, name: name })
        this.save()
        return 'success'
    }
};
export default tagListModel;
