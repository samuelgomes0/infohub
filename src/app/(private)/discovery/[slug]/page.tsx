"use client";

import { alovaInstance } from "@/services";
import { useRequest } from "alova/client";
import { useParams } from "next/navigation";
import DiscoveryDetail from "./components";
import { parseWikipediaExtract } from "./utils/parseWikiExtract";

function DiscoveryDetailPage() {
  const { slug } = useParams();

  const { loading, data } = useRequest(() =>
    alovaInstance.Get("", {
      params: {
        action: "query",
        format: "json",
        prop: "extracts",
        explaintext: true,
        pageids: slug,
        origin: "*",
      },
    }),
  );

  const page = data?.query?.pages[slug];
  const { title, extract } = page || {};

  const parsedSections = extract ? parseWikipediaExtract(extract) : [];

  return (
    <main className="bg-card mx-auto my-8 w-full rounded border p-12 py-12 md:w-3/4 lg:w-1/2">
      <DiscoveryDetail.BackButton />
      <h1 className="text-primary text-4xl font-bold">{title}</h1>
      {loading && <DiscoveryDetail.Skeleton />}
      {parsedSections.map((section, idx) => (
        <section key={idx}>
          {section.title && (
            <DiscoveryDetail.ArticleTitle text={section.title} />
          )}
          {section.paragraphs.map((p, i) => (
            <DiscoveryDetail.ArticleContent key={i} text={p} />
          ))}
        </section>
      ))}
    </main>
  );
}

export default DiscoveryDetailPage;
