import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

function DiscoveryDetailBackButton() {
  return (
    <Link
      href="/discovery"
      className="bg-primary hover:bg-primary/80 fixed top-5 left-5 flex items-center justify-center rounded-full p-2 transition-colors duration-200"
    >
      <ArrowLeftIcon size={24} className="text-secondary" />
    </Link>
  );
}

export default DiscoveryDetailBackButton;
