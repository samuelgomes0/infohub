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
  const handleClick = () => {
    if (isAuthenticated) {
      onLikeToggle();
    }
  };

  const iconClasses = cn("h-6 w-6 transition-colors duration-200 ease-in-out", {
    "text-gray-300": !isAuthenticated || !isLiked,
    "text-primary cursor-pointer": isAuthenticated && !isLiked,
    "text-red-500 fill-red-500 cursor-pointer": isAuthenticated && isLiked,
    "cursor-not-allowed": !isAuthenticated,
  });

  return (
    <HeartIcon
      className={iconClasses}
      onClick={handleClick}
      aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
      role="button"
      aria-pressed={isLiked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    />
  );
}

export default DiscoveryFavoriteButton;
