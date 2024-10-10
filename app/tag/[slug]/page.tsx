import { fullBlog, simpleBlogCard } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Params {
  params: {
    slug: string;
  };
}

async function getBlogsByTag(tag: string) {
  const query = `
    *[_type== "blog" && references(*[_type == "tag" && slug.current == "${tag}"]._id)] {
        title,
        publishedAt,
        smallDescription,
        "currentSlug" : slug.current,
        tags[]->{
            _id,
            slug,
            name
        }
    }
  `;

  const blogs = client.fetch(query);
  return blogs;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {

  const blogs: Array<simpleBlogCard> = await getBlogsByTag(params.slug);

  // console.log(blogs, "blog by tag");

  return (
    <div>
      {/* <h1>Tag's Blog</h1> */}
      <h1 className='mb-3 font-bold'>#{params.slug}</h1>
      <div>
        {blogs.length > 0 && blogs.map((blog) => (
          <Card key={params.slug}>
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
              <p className='text-sm text-right' >{new Date(blog.publishedAt).toDateString()}</p>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{blog.smallDescription}</p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default page
