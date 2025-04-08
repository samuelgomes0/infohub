function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-100 text-gray-800">
      {children}
    </div>
  );
}

export default PublicLayout;
