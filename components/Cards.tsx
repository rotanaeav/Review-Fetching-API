import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PostResponse } from "@/lib/type/posts"

export function Cards({
    userId = 0,
    id = 0,
    title = 'Default Title',
    body = 'Default Body'
}: PostResponse) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {userId} - {id}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {body}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        
      </CardFooter>
    </Card>
  )
}
