import { Button } from "@/components/ui/button";
import { Cards } from "@/components/Cards";
import { CardClientList } from "@/components/CardClientList";
import { fetchPosts } from "@/lib/data/fetchPost";
import { LoadingCard } from "@/components/Loading";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Button variant="outline">Click Here</Button>
      <Button variant="ghost">Ghost</Button>
     {/* <Cards{} /> */}
     <CardClientList fetchPosts={fetchPosts()} />
    {/* <LoadingCard /> */}
      
    </div>
  );
}
