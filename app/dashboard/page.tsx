import Link from "next/link";
import PostCard from "../components/PostCard";
import { PostResponse } from "../lib/posts";

export default async function Dashboard() {
    const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const data = await fetch(`${BASE_API_URL}/posts`);
    const posts:PostResponse[] = await data.json();
    return (
        <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-900">
            <h1 className="text-4xl mx-auto text-center mb-8 text-pink-400">Dashboard</h1>
             <div className="grid grid-cols-4 gap-4">
            {posts.map((post) => (
                <Link href={`/dashboard/blog/${post.id}`} key={post.id}>
                <PostCard
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body} 
                />
                </Link>
            ))}
            </div>

        </div>
    )
}