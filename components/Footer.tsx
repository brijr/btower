import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="mt-24">
      <p>
        Thanks for Visiting. Created by <a href="https://brijr.dev">Bridger</a>.
      </p>
      <div className="flex">
        <Link className="flex mr-2 my-2 p-0 items-center" href="/">
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Home</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
        <Link className="flex m-2 p-0 items-center" href="/">
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Writings</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
        <Link className="flex m-2 p-0 items-center" href="/">
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Work</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
        <Link
          className="flex m-2 p-0 items-center"
          href="https://github.com/brijr"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">GitHub</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
      </div>
    </footer>
  );
}
