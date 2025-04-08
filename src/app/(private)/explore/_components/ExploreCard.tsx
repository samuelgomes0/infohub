import { ExploreCardProps } from "@/app/interfaces";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function ExploreCard({
  title,
  content,
  buttonText,
  buttonLink,
}: ExploreCardProps) {
  return (
    <Card className="gap-4 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" asChild>
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ExploreCard;
