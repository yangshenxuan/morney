import createId from '@/lib/createId';

const localStorageKey = "tagList";

const tagStore = {
    tagList: [] as Tag[],
    fetchTags() {
        this.tagList = JSON.parse(window.localStorage.getItem(localStorageKey) || "[]");
        return this.tagList
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0]
    },
    createTag(name: string) {
        const names = this.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            window.alert('标签名重复了');
            return 'duplicated';
        }
        const id = createId().toString();
        this.tagList.push({ id, name: name })
        this.saveTags();
        window.alert('添加成功');
        return "success"
    },
    removeTag(id: string) {
        let index = -1
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i
                break;
            }
        }
        this.tagList.splice(index, 1)
        this.saveTags()
        return true
    },

    updateTag(id: string, name: string) {
        const idList = this.tagList.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0]
                tag.id = tag.name = name
                this.saveTags();
                return 'success'
            }
        } else {
            return 'notfound'
        }
    },
    saveTags() {
        window.localStorage.setItem(localStorageKey, JSON.stringify(this.tagList));

    }

}
export default tagStore