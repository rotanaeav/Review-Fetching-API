import { PostResponse } from "../lib/posts";

export default function PostCard({
    userId = 0,
    id = 0,
    title = 'Default Title',
    body = 'Default Body'
}: PostResponse) {
    return (
        <div className="group relative w-full max-w-md overflow-hidden rounded-2xl  p-6 shadow-xl 
        backdrop-blur-xl transition-all hover:scale-[1.02] hover:bg-white/40 hover:shadow-2xl">
            
          <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    <span className="uppercase tracking-widest text-zinc-500 dark:text-zinc-400">User {userId}</span>
                    <span className="rounded-full bg-white/40 px-3 py-1 text-zinc-800 shadow-sm backdrop-blur-md">
                        #{id}
                    </span>
                </div>

                <h3 className="mb-2 line-clamp-2 text-xl font-bold text-zinc-900 dark:text-white">
                    {title}
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-700/80 dark:text-zinc-300/80">
                    {body}
                </p>
            </div>
        </div>
    );
}