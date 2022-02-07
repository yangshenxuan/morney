type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    createRecordError: Error | null,
    createTagError: Error | null,
    currentTag?: Tag
}

type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    pad: number;
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