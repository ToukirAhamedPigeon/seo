import axios from "axios";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const response = await axios.get(`https://dummyjson.com/posts`);
    const {posts} = response.data;
    const postEntries: MetadataRoute.Sitemap = posts.map(({id}:{id:String})=>({
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`
        //lastModified: new Date(post.updatedAt),
        //changeFrequency: how many changes happens in the page,
        //priority: priority in all posts
    }))
    return [
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            lastModified: new Date()
        },
        ...postEntries
    ]
}