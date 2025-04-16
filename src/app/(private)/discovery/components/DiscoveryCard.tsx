import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthProvider";
import useLike from "@/hooks/useLike";
import Link from "next/link";
import Discovery from ".";
import { DiscoveryCardProps } from "../interfaces";

function DiscoveryCard({ id, title, content, buttonLink }: DiscoveryCardProps) {
  const { isAuthenticated } = useAuth();
  const { isLiked, toggle } = useLike(id);

  const handleLikeClick = () => {
    if (isAuthenticated) {
      toggle();
    }
  };

  const truncatedContent =
    content.length > 120 ? `${content.slice(0, 117)}...` : content;

  return (
    <Card className="flex flex-col gap-4 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-md">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-primary truncate text-2xl" title={title}>
          {title}
        </CardTitle>

        <Discovery.FavoriteButton
          isAuthenticated={isAuthenticated}
          isLiked={isLiked}
          onLikeToggle={handleLikeClick}
        />
      </CardHeader>

      <CardContent className="text-muted-foreground flex-grow">
        <p>{truncatedContent}</p>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button variant="outline" asChild>
          <Link href={buttonLink} aria-label={`Learn more about ${title}`}>
            Learn more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DiscoveryCard;
