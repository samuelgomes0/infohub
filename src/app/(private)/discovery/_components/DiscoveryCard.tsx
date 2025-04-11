import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { DiscoveryCardProps } from "../_interfaces";

function DiscoveryCard({ title, content, buttonLink }: DiscoveryCardProps) {
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
          <Link href={buttonLink}>Learn more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DiscoveryCard;
