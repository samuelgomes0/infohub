import Footer from "@/components/Footer";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default PrivateLayout;
