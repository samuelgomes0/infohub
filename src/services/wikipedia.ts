import { WikiArticle } from "@/interfaces";
import alovaInstance from "./alovaInstance";

export function searchWikipedia(term: string) {
  return alovaInstance.Get<{ query: { pages: Record<string, any> } }>("", {
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
  const res = await searchWikipedia(term).send();
  const pages = res.data.query?.pages || {};

  return Object.values(pages).map((page: any) => ({
    pageid: page.pageid,
    title: page.title,
    extract: page.extract,
  }));
}
