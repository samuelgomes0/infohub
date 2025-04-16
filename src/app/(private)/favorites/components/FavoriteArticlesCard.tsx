"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthProvider";
import { useLike } from "@/hooks";
import { alovaInstance } from "@/services";
import { useRequest } from "alova/client";
import Link from "next/link";
import Discovery from "../../discovery/components";

interface FavoritedArticleCardProps {
  articleId: number;
}

function FavoritedArticleCard({ articleId }: FavoritedArticleCardProps) {
  const { isLiked, toggle } = useLike(articleId);
  const { isAuthenticated } = useAuth();

  const handleLikeClick = () => {
    if (isAuthenticated) toggle();
  };

  const { loading, data, error } = useRequest(() =>
    alovaInstance.Get("", {
      params: {
        action: "query",
        format: "json",
        prop: "extracts",
        explaintext: true,
        pageids: articleId,
        origin: "*",
      },
    }),
  );

  const page = data?.query?.pages?.[articleId];
  const title = page?.title || "Untitled";
  const content: string = page?.extract || "";
  const buttonLink = `/discovery/${articleId}`;

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
        {loading && <p className="text-sm italic">Loading content...</p>}

        {error && (
          <p className="text-destructive text-sm">
            Failed to load article content.
          </p>
        )}

        {!loading && !error && (
          <p>
            {content.length > 120 ? `${content.slice(0, 117)}...` : content}
          </p>
        )}
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button variant="outline" asChild>
          <Link href={buttonLink} aria-label={`View details for ${title}`}>
            Learn more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FavoritedArticleCard;
