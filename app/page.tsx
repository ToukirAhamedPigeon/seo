'use client'

import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Post {
  id: number
  title: string
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then(res => setPosts(res.data.posts))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Loading posts...</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-gray-300 rounded" />
              <div className="h-4 bg-gray-300 rounded w-5/6" />
              <div className="h-4 bg-gray-300 rounded w-2/3" />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-blue-500">{post.title}</h2>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
