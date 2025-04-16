import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthProvider";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { Separator } from "../ui/separator";
interface UserAvatarProps {
  userName: string;
}

const userAvatarMenuItems = [{ label: "Favorites", href: "/favorites" }];

function UserAvatar({ userName }: UserAvatarProps) {
  const { logout } = useAuth();
  const handleLogout = () => {
    toast.success("Logged out successfully", {
      description: "You have been logged out of your account.",
    });
    logout();
    redirect("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-11 w-11">
          <AvatarFallback className="bg-primary text-secondary">
            {userName}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userAvatarMenuItems.map((item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
        <Separator className="my-1" />
        <DropdownMenuItem className="text-red-500" onClick={handleLogout}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatar;
