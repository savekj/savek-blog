export interface simpleBlogCard {
    title: string,
    publishedAt: string,
    smallDescription: string,
    currentSlug: string,
    titleImage: any
}

export interface fullBlog {
    currentSlug: string,
    title: string,
    publishedAt: string,
    content: any,
    titleImage: any,
    tags: Array<Tag>
}

export interface Tag {
    name: string,
    slug: { current: string },
    _id: string
    postCount?: number,
}