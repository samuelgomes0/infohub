import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

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

function NavMenu() {
  return (
    <NavigationMenu className="w-full flex-none p-4">
      <NavigationMenuList className="flex justify-center gap-8 font-medium">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline">
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
