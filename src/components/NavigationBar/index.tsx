"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemsProps {
  href: string;
  title: string;
}

const menuItems: MenuItemsProps[] = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/curiosities",
    title: "Curiosities",
  },
];

function NavigationBar() {
  const pathname = usePathname();
  const isPathActive = (path: string) => path === pathname;

  return (
    <div className="flex w-full items-center justify-between border-b bg-white p-4">
      <div></div>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center gap-8 font-medium">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`hover:underline ${isPathActive(item.href) ? "text-black" : "text-gray-500"}`}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div>login</div>
    </div>
  );
}

export default NavigationBar;
