import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      Powered by{" "}
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </footer>
  );
}