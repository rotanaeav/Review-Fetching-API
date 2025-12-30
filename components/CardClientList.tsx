"use client";

import { fetchPosts } from "@/lib/data/fetchPost";
import { use } from "react";
import { Cards } from "./Cards";
import { PostResponse } from "@/lib/type/posts";

export function CardClientList({fetchPosts} : {fetchPosts: Promise<PostResponse[]>}) {
    //use the hook to consume the promise
    const posts = use(fetchPosts);
    return (
        <div className="grid grid-cols-4 gap-4">
            {posts.map((post) => (
                <Cards
                    key={post.id}
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    );
}