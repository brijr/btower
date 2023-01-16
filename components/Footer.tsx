import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="slide-in-right text-lg bg-transparent xl:bg-neutral-300 my-12 z-40 xl:fixed xl:flex flex-col justify-between bottom-0 right-0 xl:m-0 xl:p-6 xl:h-full xl:w-1/6">
      <div className="xl:hidden my-12 bg-[#222] h-[0.5px] w-1/4"></div>
      <div>

        {/* work */}
        <a className="flex my-2 p-0 items-center" href="https://read.cv/btower">
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Resume</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </a>

        {/* work */}
        <Link className="flex my-2 p-0 items-center" href="/work">
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Work / Projects</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>

        {/* writings */}
        <a
          className="flex my-2 p-0 items-center"
          href="https://brijr.medium.com/"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Writings</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </a>

        {/* LinkedIn */}
        <Link
          className="flex my-2 p-0 items-center"
          href="https://linkedin.com/in/brdgr"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">LinkedIn</p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>

        {/* github */}
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

        {/* insta */}
        <Link
          className="flex my-2 p-0 items-center"
          href="https://instagram.com/bt0wer"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">
            Instagram
          </p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
      </div>

      <p className="mt-6 xl:mb-2">
        Website created by <a href="https://brijr.dev">Bridger Tower</a> circa
        2023.
      </p>
    </footer>
  );
}
