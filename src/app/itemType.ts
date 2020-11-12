export interface Item {
    id: number,
    name: string,
    // content: string,
    // auther: {
    //   id: number,
    //   username: string
    // },
    // images: ImageData,
    branch: number,
    // finished: boolean
}

export interface Child {
    id: number,
    name: string,
    // content: string,
    // images: ImageData,
    branch: number,
    finished: boolean,
    target: Item,
    created_at: any
}

export interface User{
    id: number,
    username: string
}