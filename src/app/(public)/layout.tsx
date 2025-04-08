import Footer from "@/components/Footer";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <div className="flex flex-1 items-center justify-center">{children}</div>
      <Footer />
    </div>
  );
}

export default PublicLayout;
