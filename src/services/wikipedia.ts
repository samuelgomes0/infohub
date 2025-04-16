import alovaInstance from "./alovaInstance";

export interface WikiArticle {
  pageid: number;
  title: string;
  extract: string;
}

export interface WikipediaAPIResponse {
  data: {
    query: {
      pages: Record<string, WikiArticle>;
    };
  };
}

export function searchWikipedia(term: string) {
  return alovaInstance.Get<WikipediaAPIResponse>("", {
    params: {
      action: "query",
      format: "json",
      origin: "*",
      generator: "search",
      gsrsearch: term,
      gsrlimit: 10,
      prop: "extracts",
      exintro: true,
      explaintext: true,
    },
  });
}

export async function fetchWikiArticles(term: string): Promise<WikiArticle[]> {
  const { data } = await searchWikipedia(term).send();
  const pages = data.query?.pages || {};

  return Object.values(pages).map((page) => ({
    pageid: page.pageid,
    title: page.title,
    extract: page.extract,
  }));
}
