"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DefaultButton from "../DefaultButton";
import ThemeSwitcher from "../ThemeSwitcher";
import UserAvatar from "../UserAvatar";

interface navMenuItems {
  href: string;
  title: string;
}

const navMenuItems: navMenuItems[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/discovery",
    title: "Discovery",
  },
];

function NavigationBar() {
  const pathname = usePathname();
  const isPathActive = (path: string) => path === pathname;
  const isAuthenticated = false;

  return (
    <div className="bg-primary-foreground flex w-full items-center justify-between border-b p-4">
      <div></div>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center gap-8 font-medium">
          {navMenuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`hover:underline ${isPathActive(item.href) ? "text-primary bg-secondary" : "text-muted-foreground"}`}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        {isAuthenticated ? (
          <UserAvatar userName="SG" />
        ) : (
          <DefaultButton
            content="Login"
            url="/login"
            className="hover:bg-primary/90 bg-primary text-secondary h-10"
          />
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
