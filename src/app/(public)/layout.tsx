import Footer from "@/components/Footer";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100">
      {children}
      <Footer />
    </div>
  );
}

export default PublicLayout;
