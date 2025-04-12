import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useLike from "@/hooks/useLike";
import Link from "next/link";
import Discovery from ".";
import { DiscoveryCardProps } from "../interfaces";

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
        <CardTitle className="text-primary text-2xl">{title}</CardTitle>
        <Discovery.FavoriteButton
          isAuthenticated={isAuthenticated}
          isLiked={isLiked}
          onLikeToggle={handleLikeClick}
        />
      </CardHeader>
      <CardContent className="text-muted-foreground flex-grow">
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
