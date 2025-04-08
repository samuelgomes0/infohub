interface HomeDescriptionProps {
  content: string;
}

function HomeDescription({ content }: HomeDescriptionProps) {
  return <p className="text-lg text-gray-500">{content}</p>;
}

export default HomeDescription;
