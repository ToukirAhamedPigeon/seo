
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next';

  export const metadata: Metadata = {
  title: "About",
  };

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 p-6">
      <Card className="max-w-2xl w-full shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="text-3xl text-blue-600">About ImageAI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <Separator />
          <p className="text-lg">
            This is a <strong>demo About page</strong> for the <code>ImageAI</code> project, built with <span className="text-blue-500 font-semibold">Next.js</span>, <span className="text-purple-500 font-semibold">Tailwind CSS</span>, and <span className="text-green-600 font-semibold">ShadCN UI</span>.
          </p>
          <p>
            The purpose of this page is to demonstrate clean, accessible, and responsive UI design using modern frontend technologies with an emphasis on developer experience and scalability.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}

  