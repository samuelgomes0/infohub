import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100">
      <NavMenu />
      <div className="flex flex-1 items-center justify-center">{children}</div>
      <Footer />
    </div>
  );
}

export default PublicLayout;
