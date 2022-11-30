import Image from "next/image";
import venn from "../public/venn.png";
import btIcon from "../public/icon.jpeg";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";


export default function Intro() {
  return (
    <div>
      <div className="mt-12 mb-24">
        <div className="w-24 ring-2 outline outline-offset-2 outline-1 my-12 outline-[#bbb] rounded-full">
          <Image
            className="rounded-full"
            src={btIcon}
            alt="Icon of Bridger Tower on a Laptop probably coding or designing"
          ></Image>
        </div>

        <h1 className="text-4xl">
          Bridger Tower
          <small className="block">
            aka.{" "}
            <a href="https://b98.io" target="_blank" rel="noreferrer">
              B98
            </a>
            ,{" "}
            <a href="https://github.com/brijr" target="_blank" rel="noreferrer">
              brijr
            </a>
            , and{" "}
            <a
              href="https://youtube.com/@code-craft"
              target="_blank"
              rel="noreferrer"
            >
              CodeCraft
            </a>
          </small>
        </h1>
        <h2 className="text-xl">
          Frontend Developer, Multi-Disciplinary Designer, and Product Marketer
          located in{" "}
          <a
            href="https://goo.gl/maps/u25hR137vAGcUXtP9"
            target="_blank"
            rel="noreferrer"
          >
            Salt Lake City
          </a>
          . Passionate about aesthetics, usability, code, and branding.
        </h2>

        <div className="flex flex-wrap gap-4">
          <Link className="flex my-2 p-0 items-center" href="/work">
            <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Work</p>
            <div className="w-4 h-4">
              <ArrowUpRightIcon />
            </div>
          </Link>

          <Link className="flex my-2 p-0 items-center" href="/writings">
            <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">
              Writings
            </p>
            <div className="w-4 h-4">
              <ArrowUpRightIcon />
            </div>
          </Link>

          <Link className="flex my-2 p-0 items-center" href="/about">
            <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">
              About Me
            </p>
            <div className="w-4 h-4">
              <ArrowUpRightIcon />
            </div>
          </Link>
        </div>
      </div>

      <h3 className="text-lg">
        I live for <span>design</span>, <span>code</span>,{" "}
        <span>technology</span>, and <span>marketing</span>.
      </h3>
      <p className="mb-4">
        As one studied and involved heavily in design, development, and
        marketing and I seek to bridge the gaps between them.
      </p>
      <p>
        I believe the combination and collaboration of design, code, technology,
        and marketing leads to powerful products, impactful websites, and
        further innovation.
      </p>
      <div className="my-12 invert dark:invert-0 xl:w-3/4">
        <Image
          src={venn}
          alt="Venn diagram of Bridger Tower's Favorite Place"
        />
      </div>
    </div>
  );
}
