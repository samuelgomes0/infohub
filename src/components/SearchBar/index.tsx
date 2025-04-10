import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
}

function SearchBar({ placeholder: placeholderContent }: SearchBarProps) {
  return (
    <div className="relative flex w-full max-w-md items-center">
      <SearchIcon className="absolute top-3.5 left-4 text-gray-400" size={20} />
      <Input
        placeholder={placeholderContent}
        className="h-12 rounded-full border-gray-200 bg-white pl-12"
      />
    </div>
  );
}

export default SearchBar;
