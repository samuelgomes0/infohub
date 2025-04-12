interface DiscoveryNoResultsMessageProps {
  title: string;
  description?: string;
}

function DiscoveryNoResultsMessage({
  title,
  description,
}: DiscoveryNoResultsMessageProps) {
  return (
    <div className="col-span-2 py-8 text-center">
      <h2 className="text-primary text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default DiscoveryNoResultsMessage;
