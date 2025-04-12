import Footer from "@/components/Footer";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center">
      {children}
      <Footer />
    </div>
  );
}

export default PublicLayout;
