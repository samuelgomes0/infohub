interface DiscoveryNoResultsMessageProps {
  title: string;
  description?: string;
}

function DiscoveryNoResultsMessage({
  title,
  description,
}: DiscoveryNoResultsMessageProps) {
  return (
    <div
      className="col-span-full py-12 text-center"
      role="status"
      aria-live="polite"
    >
      <h2 className="text-primary text-2xl font-semibold">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-2 text-base">{description}</p>
      )}
    </div>
  );
}

export default DiscoveryNoResultsMessage;
