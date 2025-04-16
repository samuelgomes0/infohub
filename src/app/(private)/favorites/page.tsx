import { DiscoveryProvider } from "../discovery/context";
import FavoriteArticles from "./components";

function FavoritesPage() {
  return (
    <DiscoveryProvider>
      <main className="mx-auto w-full py-12 max-md:px-4 md:w-3/4 lg:w-1/2">
        <FavoriteArticles.Header />
        <FavoriteArticles.Content />
      </main>
    </DiscoveryProvider>
  );
}

export default FavoritesPage;
