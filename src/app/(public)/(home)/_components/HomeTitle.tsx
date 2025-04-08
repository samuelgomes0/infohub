interface HomeTitleProps {
  content: string;
}

function HomeTitle({ content }: HomeTitleProps) {
  return (
    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
      {content}
    </h1>
  );
}

export default HomeTitle;
