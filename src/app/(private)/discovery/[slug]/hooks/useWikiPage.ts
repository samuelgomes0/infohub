import { alovaInstance } from "@/services";
import { useEffect, useState } from "react";

export function useWikipediaPage(slug: string) {
  const isPageId = /^\d+$/.test(slug);
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        let pageId = slug;

        if (!isPageId) {
          const search = await alovaInstance
            .Get("", {
              params: {
                action: "query",
                format: "json",
                list: "search",
                srsearch: slug,
                origin: "*",
              },
            })
            .send();

          const result = search?.query?.search?.[0];
          if (!result) throw new Error("Nenhum resultado encontrado.");
          pageId = String(result.pageid);
        }

        const extract = await alovaInstance
          .Get("", {
            params: {
              action: "query",
              format: "json",
              prop: "extracts",
              explaintext: true,
              origin: "*",
              pageids: pageId,
            },
          })
          .send();

        const page = extract?.query?.pages?.[pageId];
        if (!page) throw new Error("Página não encontrada.");
        setPageData(page);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [slug]);

  return { pageData, loading, error };
}
