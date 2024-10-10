import React from 'react'
import { client } from '../lib/sanity';
import { Tag } from '../lib/interface';
import Link from 'next/link';

async function getAllTags() {
    const query = `
        *[_type == "tag"] {
            name,
            slug,
            _id,
            "postCount": count(*[_type == "blog" && references("tags", ^._id)]),
    }
    `;

    const tags = client.fetch(query);

    return tags;
}

export const revalidate = 60;

const page = async () => {

    const tags: Tag[] = await getAllTags()
    // console.log(tags, 'tags')
    return (
        <div>
            <h1>TAGS</h1>
            <div>
                {tags.length > 0 && tags.map((tag) => (
                    <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
                        <div className='mb-2 p-2 text-sm lowercase border hover:text-green-600'>
                            #{tag.name} ({tag.postCount})
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default page
