interface HomeDescriptionProps {
  content: string;
}

function HomeDescription({ content }: HomeDescriptionProps) {
  return <p className="text-muted-foreground text-lg">{content}</p>;
}

export default HomeDescription;
