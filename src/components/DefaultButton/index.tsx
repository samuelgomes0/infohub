import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DefaultButtonProps {
  url: string;
  icon?: LucideIcon;
  content: string;
  className?: string;
}

function DefaultButton({
  icon: Icon,
  content,
  url,
  className,
}: DefaultButtonProps) {
  return (
    <Button
      className={cn(
        "h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600",
        className,
      )}
      asChild
    >
      <Link href={url}>
        {Icon && <Icon />}
        {content}
      </Link>
    </Button>
  );
}

export default DefaultButton;
