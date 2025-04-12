import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}

export default PrivateLayout;
