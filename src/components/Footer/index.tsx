import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-auto w-full p-4 text-center text-sm">
      <p className="text-muted-foreground">
        Desenvolvido por{" "}
        <Link
          className="font-medium hover:underline"
          href="https://github.com/samuelgomes0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Samuel Gomes Rosa GitHub Profile"
        >
          Samuel Gomes Rosa
        </Link>
        .
      </p>
    </footer>
  );
}

export default Footer;
