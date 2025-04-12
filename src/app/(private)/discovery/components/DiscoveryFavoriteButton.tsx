import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";

interface DiscoveryFavoriteButtonProps {
  isAuthenticated: boolean;
  isLiked: boolean;
  onLikeToggle: () => void;
}

function DiscoveryFavoriteButton({
  isAuthenticated,
  isLiked,
  onLikeToggle,
}: DiscoveryFavoriteButtonProps) {
  const handleClick = isAuthenticated ? onLikeToggle : undefined;

  const iconClasses = cn("h-6 w-6", {
    "text-gray-300": !isAuthenticated || !isLiked,
    "cursor-pointer text-primary": isAuthenticated,
    "fill-red-500 text-red-500": isAuthenticated && isLiked,
  });

  return (
    <HeartIcon
      className={iconClasses}
      onClick={handleClick}
      aria-label="Favorite"
      role="button"
    />
  );
}

export default DiscoveryFavoriteButton;
