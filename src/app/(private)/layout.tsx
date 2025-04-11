import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}

export default PrivateLayout;
