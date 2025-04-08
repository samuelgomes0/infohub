import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface HomeButtonProps {
  icon: LucideIcon;
  content: string;
}

function HomeButton({ icon: Icon, content }: HomeButtonProps) {
  return (
    <Button>
      {Icon && <Icon />}
      {content}
    </Button>
  );
}

export default HomeButton;
