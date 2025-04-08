import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface ExploreSearchBarProps {
  placeholderContent: string;
}

function ExploreSearchBar({ placeholderContent }: ExploreSearchBarProps) {
  return (
    <div className="relative flex w-full max-w-md items-center">
      <SearchIcon className="absolute top-2.5 left-3 text-gray-400" size={20} />
      <Input placeholder={placeholderContent} className="pl-10" />
    </div>
  );
}

export default ExploreSearchBar;
