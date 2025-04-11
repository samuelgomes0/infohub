"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
  onChange?: (value: string) => void;
}

function SearchBar({
  placeholder: placeholderContent,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative flex w-full max-w-md items-center">
      <SearchIcon className="absolute top-3.5 left-4 text-gray-400" size={20} />
      <Input
        placeholder={placeholderContent}
        className="h-12 rounded-full border-gray-200 bg-white pl-12"
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
