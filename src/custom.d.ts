type RecordItem = {
    tags: string[];
    notes: string;
    select: string;
    pad: string;
    time?: Date;
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
}