import Link from "next/link";
import PostCard from "../../components/PostCard";
import { fetchPosts } from "@/lib/data/fetchPost";
import { Cards } from "@/components/Cards";

export default async function Dashboard() {
    const posts = await fetchPosts();
    
    return (
        <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-900">
            <h1 className="text-4xl mx-auto text-center mb-8 text-pink-400">សួស្ដីកម្ពុជា</h1>
             <div className="grid grid-cols-4 gap-4">
            {posts.map((post) => (
                <Link href={`/dashboard/blog/${post.id}`} key={post.id}>
                <Cards
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