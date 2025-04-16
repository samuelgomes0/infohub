export type WikiSection = {
  title: string | null;
  paragraphs: string[];
};

export function parseWikipediaExtract(raw: string): WikiSection[] {
  const parts = raw.split(/==+\s*(.*?)\s*==+/g);
  const sections: WikiSection[] = [];

  if (parts[0].trim()) {
    sections.push({
      title: null,
      paragraphs: parts[0]
        .trim()
        .split(/\n\s*\n/)
        .map((p) => p.trim()),
    });
  }

  for (let i = 1; i < parts.length; i += 2) {
    const title = parts[i];
    const body = parts[i + 1] ?? "";
    sections.push({
      title,
      paragraphs: body
        .trim()
        .split(/\n\s*\n/)
        .map((p) => p.trim()),
    });
  }

  return sections;
}
