import { fullBlog } from '@/app/lib/interface'
import { client, urlFor } from '@/app/lib/sanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export const revalidate = 30

async function getData(slug: string) {
    const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        publishedAt,
        content,
        titleImage,
        tags[]->{
            _id,
            slug,
            name
        }
    }[0]`
    const data = await client.fetch(query)

    return data
}

const page = async ({ params }: { params: { slug: string } }) => {

    const data: fullBlog = await getData(params.slug)

    if (!data) {
        notFound();
    }

    return (
        <div className='mt-8'>
            <h1>
                <span
                    className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
                    Savek - Blog
                </span>
                <span className='mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl'>{data.title}</span>
            </h1>
            <p className='my-2 text-right'>{new Date(data.publishedAt).toDateString()}</p>
            <Image
                src={urlFor(data.titleImage).url()}
                alt='Title Image'
                width={800}
                height={800}
                priority
                className='rounded-lg mt-8 border'
            />

            <div className='mt-16 prose prose-blue prose-lg dark:prose-invert prose-headings:underline prose-li:marker:text-primary prose-a:text-primary'>
                <PortableText value={data.content} />
            </div>
            <br />
            <div>
                {data.tags.map((tag) => (
                    <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
                        <span key={tag._id} className='mr-2 py-2 px-8 rounded-sm dark:bg-gray-950 border dark:border-gray-300'>Tag: {tag.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default page
