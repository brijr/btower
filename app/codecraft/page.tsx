import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function CodeCraft() {
  return (
    <div>
      <h1 className="text-2xl">Code Craft</h1>
      <h3>Coming Soon...</h3>

      {/* YouTube */}
      <Link
        className="flex my-2 p-0 items-center"
        href="https://youtube.com/@code-craft"
      >
        <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">
          Subscribe on YouTube
        </p>
        <div className="w-4 h-4">
          <ArrowUpRightIcon />
        </div>
      </Link>

      {/* github */}
      <Link
        className="flex my-2 p-0 items-center"
        href="https://github.com/brijr/codecraft"
      >
        <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">
          Star on GitHub
        </p>
        <div className="w-4 h-4">
          <ArrowUpRightIcon />
        </div>
      </Link>
    </div>
  );
}
