
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

const getPost = cache(async(postId:string)=>{
  return await axios.get(`https://dummyjson.com/posts/${postId}`);
})

export async function generateMetadata({ params }:{params: Promise<{ id: string }>}):Promise<Metadata>{
  const { id } = await params;
  const res = await getPost(id);
  const post = res.data;
  console.log(post);
  return {
    title: post.title,
    description: post.body,
    // openGraph:{
    //   images:[
    //     {
    //       url:post.imageUrl
    //     }
    //   ]
    // }
  }
}

export default async function PostDetail({ params }:{params: Promise<{ id: string }>}) {
  try{
    const { id } = await params;
    const res = await getPost(id);
    const post = res.data;
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 p-6">
        <Card className="max-w-3xl w-full border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">{post.title}</CardTitle>
            <Badge variant="secondary" className="mt-2">Post ID: {post.id}</Badge>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <Separator />
            <p className="text-lg leading-relaxed">{post.body}</p>
          </CardContent>
        </Card>
      </main>
    )
  }
  catch (error) {
    notFound()
  }
}
