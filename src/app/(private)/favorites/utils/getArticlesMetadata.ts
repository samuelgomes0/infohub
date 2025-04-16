// utils/articleMetadataFetcher.ts
export async function getArticlesMetadata(ids: string[]) {
  const promises = ids.map(async (id) => {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro&explaintext&pageids=${id}`,
    );
    const data = await res.json();
    const page = data.query.pages[id];

    return {
      id,
      title: page.title,
      content: page.extract,
    };
  });

  return Promise.all(promises);
}
