import { Skeleton } from "@/components/ui/skeleton"

export function LoadingCard() {
  const items = Array.from({ length: 12 });

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          
          <Skeleton className="w-full aspect-3/4 rounded-xl" />
          
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  )
}