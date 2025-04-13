"use client";

import Discovery from "./components";
import { DiscoveryProvider } from "./context";

function DiscoveryPage() {
  return (
    <DiscoveryProvider>
      <main className="mx-auto w-full py-12 max-md:px-4 md:w-3/4 lg:w-1/2">
        <Discovery.Header />
        <Discovery.Content />
      </main>
    </DiscoveryProvider>
  );
}

export default DiscoveryPage;
