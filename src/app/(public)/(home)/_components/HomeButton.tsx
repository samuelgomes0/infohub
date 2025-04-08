import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface HomeButtonProps {
  icon: LucideIcon;
  content: string;
}

function HomeButton({ icon: Icon, content }: HomeButtonProps) {
  return (
    <Button
      className="h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      asChild
    >
      <Link href="/explore">
        {Icon && <Icon />}
        {content}
      </Link>
    </Button>
  );
}

export default HomeButton;
