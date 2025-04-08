import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface ExploreCardProps {
  title: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

function ExploreCard({
  title,
  content,
  buttonText,
  buttonLink,
}: ExploreCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ExploreCard;
