import { alovaInstance } from "@/services";
import { useEffect, useState } from "react";

interface SearchResponse {
  query?: {
    search?: { pageid: number }[];
  };
}

interface ExtractResponse {
  query?: {
    pages?: {
      [key: string]: WikipediaPage;
    };
  };
}

interface WikipediaPage {
  pageid: number;
  title: string;
  extract: string;
}

async function fetchSearchPageId(slug: string): Promise<string> {
  const response = await alovaInstance
    .Get<SearchResponse>("", {
      params: {
        action: "query",
        format: "json",
        list: "search",
        srsearch: slug,
        origin: "*",
      },
    })
    .send();

  const pageId = response?.query?.search?.[0]?.pageid;
  if (!pageId) throw new Error("No matching page found.");
  return String(pageId);
}

async function fetchPageExtract(pageId: string): Promise<WikipediaPage> {
  const response = await alovaInstance
    .Get<ExtractResponse>("", {
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

  const page = response?.query?.pages?.[pageId];
  if (!page || typeof page !== "object") throw new Error("Page not found.");
  return page as WikipediaPage;
}

export function useWikipediaPage(slug: string) {
  const [pageData, setPageData] = useState<WikipediaPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);

        const isNumericId = /^\d+$/.test(slug);
        const pageId = isNumericId ? slug : await fetchSearchPageId(slug);
        const data = await fetchPageExtract(pageId);

        if (!isCancelled) setPageData(data);
      } catch (err) {
        if (!isCancelled) {
          setError(
            err instanceof Error ? err : new Error("Unknown error occurred."),
          );
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    fetchPage();

    return () => {
      isCancelled = true;
    };
  }, [slug]);

  return { pageData, loading, error };
}
