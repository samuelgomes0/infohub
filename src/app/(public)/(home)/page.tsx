"use client";

import DefaultButton from "@/components/DefaultButton";
import SearchBar from "@/components/SearchBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import UserAvatar from "@/components/UserAvatar";
import { useAuth } from "@/contexts/AuthProvider";
import { CompassIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Home from "./components";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    router.push(`/discovery/${encodeURIComponent(trimmed)}`);
  };

  return (
    <main className="mx-auto flex max-w-sm flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <ThemeSwitcher />
        {isAuthenticated ? (
          <UserAvatar userName="WH" />
        ) : (
          <DefaultButton
            content="Login"
            url="/login"
            className="bg-primary text-secondary hover:bg-primary/90 h-10"
          />
        )}
      </div>

      <section className="flex flex-col gap-2">
        <Home.Title content="WiseHub" />
        <Home.Description content="Explore curious facts from around the world." />
      </section>

      <SearchBar
        placeholder="Search for knowledge..."
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
        aria-label="Search for articles by topic"
      />

      <span className="text-muted-foreground text-sm">or</span>

      <DefaultButton
        icon={CompassIcon}
        content="Discover something new!"
        url="/discovery"
        className="w-full sm:w-auto"
      />
    </main>
  );
}

export default HomePage;
