import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-4">
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/">
        <p>Work</p>
      </Link>
      <Link href="/">
        <p>Contact</p>
      </Link>
      <a href="https://github.com/brijr">GitHub</a>
    </footer>
  );
}
