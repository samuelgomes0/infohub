"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}

function SearchBar({
  placeholder: placeholderContent,
  value,
  onChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <div className="relative flex w-full max-w-md items-center">
      <SearchIcon className="absolute top-3.5 left-4 text-gray-400" size={20} />
      <Input
        placeholder={placeholderContent}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit?.();
        }}
        className="border-border text-primary h-12 rounded-full bg-white pl-12"
      />
    </div>
  );
}

export default SearchBar;
