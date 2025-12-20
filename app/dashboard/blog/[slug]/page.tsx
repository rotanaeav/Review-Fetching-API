import PostCard from "@/app/components/PostCard";
import { PostResponse } from "@/app/lib/posts";

async function fetchPostById(slug: string) {
    const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const getPost = await fetch(`${BASE_API_URL}/posts/${slug}`);
    const post: PostResponse = await getPost.json();
    return post;
}
export default async function Blog(
    {
        params
    }: {params: Promise<{slug: string}>
}){
    const {slug} = await params;
    const post = await fetchPostById(slug)
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8">
            
            <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-pink-400">
                Blog Post {slug}
            </h1>

            <PostCard
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
            />
            <a 
                href="/dashboard" 
                className="mt-8 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
                ← Back to Dashboard
            </a>
        </div>
    )
}