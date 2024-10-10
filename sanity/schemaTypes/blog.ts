import { title } from "process";

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of blog article',
            options: {
                source: 'title'
            }
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [{ type: 'text', name: 'alt', title: 'Alt' }]
                }
            ]
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            // type: "tag" from tag.ts file
            of: [{
                type: "reference", to: [{ type: "tag" }]
            }]
        }
    ]
}