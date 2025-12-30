import { PostResponse } from "../type/posts";
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
//loadPosts
export async function fetchPosts() {
    
    const data = await fetch(`${BASE_API_URL}/posts`);
    const posts:PostResponse[] = await data.json();
    return posts;
}

//fetchID
export async function fetchPostById(slug: string) {
    const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const getPost = await fetch(`${BASE_API_URL}/posts/${slug}`);
    const post: PostResponse = await getPost.json();
    return post;
}