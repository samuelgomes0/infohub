import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface HomeQuoteCardProps {
  quote?: string;
  author: string;
}

function HomeQuoteCard({ quote, author }: HomeQuoteCardProps) {
  return (
    <Card className="w-full max-w-xl">
      <CardContent className="flex justify-center font-serif">
        <p>&quot;{quote}&quot;</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-muted-foreground dark:text-muted-foreground text-center text-sm leading-5 font-semibold">
          - {author}
        </p>
      </CardFooter>
    </Card>
  );
}

export default HomeQuoteCard;
