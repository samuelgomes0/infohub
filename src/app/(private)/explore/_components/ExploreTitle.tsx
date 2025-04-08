interface ExploreTitleProps {
  content: string;
}

function ExploreTitle({ content }: ExploreTitleProps) {
  return <h1 className="text-4xl font-bold">{content}</h1>;
}

export default ExploreTitle;
