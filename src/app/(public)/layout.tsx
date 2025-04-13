import Footer from "@/components/Footer";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 -z-10 flex h-full min-h-screen w-full flex-col items-center bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[#0a0a0a] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]">
      {children}
      <Footer />
    </div>
  );
}

export default PublicLayout;
