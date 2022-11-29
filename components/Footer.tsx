import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="my-12 bg-[#222] dark:bg-[#fefefe] h-[0.5px] w-1/4"></div>
      <p>
        Thanks for Visiting. Created by <a href="https://brijr.dev">Bridger</a>.
      </p>
      <div className="mt-8">
        <Link className="flex my-2 p-0 items-center" href="/">
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Writings</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
        <Link
          className="flex my-2 p-0 items-center"
          href="https://linkedin.com/in/brdgr"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Linkedin</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
        <Link
          className="flex my-2 p-0 items-center"
          href="https://github.com/brijr"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">GitHub</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
        {/* twitter */}
        <Link
          className="flex my-2 p-0 items-center"
          href="https://twitter.com/_brijr"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Twitter</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
        {/* YouTube */}
        <Link
          className="flex my-2 p-0 items-center"
          href="https://youtube.com/@code-craft"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">YouTube</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
      </div>
    </footer>
  );
}
