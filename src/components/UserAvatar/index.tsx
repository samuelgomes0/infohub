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
import { redirect } from "next/navigation";
import { Separator } from "../ui/separator";

interface UserAvatarProps {
  userName: string;
}

const userAvatarMenuItems = [{ label: "My Profile" }, { label: "Settings" }];

function UserAvatar({ userName }: UserAvatarProps) {
  const { logout } = useAuth();
  const handleLogout = () => {
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
          <DropdownMenuItem key={index} disabled>
            {item.label}
          </DropdownMenuItem>
        ))}
        <Separator className="my-2" />
        <DropdownMenuItem className="text-red-500" onClick={handleLogout}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatar;
