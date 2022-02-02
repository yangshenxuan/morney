type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}

type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    pad: string;
    createdAt?: string;
}
type Tag = {
    id: string,
    name: string
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' | 'space'
    save: () => void
    update: (id: string, name: string) => 'success' | 'duplicated' | 'notfound'
    remove: (id: string) => boolean

}
interface Window {
    tagList: Tag[]
    createTag: (name: string) => void
    removeTag: (id: string) => boolean
    updateTag: TagListModel["update"] //类型一样
    findTag: (id: string) => Tag | undefined
    recordList: RecordItem[]
    createRecord: (record: RecordItem) => void
}