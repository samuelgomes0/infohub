import notFound from "@/assets/not-found.png";
import Image from "next/image";

function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0B0F2B]">
      <Image src={notFound} alt="Not Found" width={1000} height={1000} />;
    </div>
  );
}

export default NotFoundPage;
