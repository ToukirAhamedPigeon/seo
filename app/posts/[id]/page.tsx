'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`)
      .then(res => setPost(res.data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600 animate-pulse">Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold text-xl">Post not found</p>
      </div>
    )
  }

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
