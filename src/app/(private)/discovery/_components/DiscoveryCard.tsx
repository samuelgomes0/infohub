import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useLike from "@/hooks/useLike";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import { DiscoveryCardProps } from "../_interfaces";

function DiscoveryCard({ id, title, content, buttonLink }: DiscoveryCardProps) {
  const isAuthenticated = true;
  const { isLiked, toggle } = useLike(id);

  const handleLikeClick = () => {
    if (!isAuthenticated) return;
    toggle();
  };

  return (
    <Card className="gap-4 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-md">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <HeartIcon
          className={cn(
            "h-6 w-6",
            isAuthenticated ? "block cursor-pointer" : "text-gray-300",
            isAuthenticated && isLiked
              ? "fill-red-500 text-red-500"
              : "text-gray-300",
          )}
          onClick={handleLikeClick}
        />
      </CardHeader>
      <CardContent className="flex-grow text-gray-500">
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" asChild>
          <Link href={buttonLink}>Learn more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DiscoveryCard;
