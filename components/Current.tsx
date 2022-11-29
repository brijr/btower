import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Current() {
  return (
    <div>
      <h4 className="text-lg">Currently</h4>
      {/* work item */}
      <div className="workItem">
        <p>
          <strong>Lead Web Developer and Designer</strong> at{" "}
          <a href="https://tackle.io">Tackle.io</a>.
        </p>
        <p className="mb-4 mt-2 italic">August 2018 to Present</p>
        <small>
          As the lead Web Developer and Designer at Tackle, I work on the
          Marketing Team to manage, maintain, and improve the marketing site. My
          responsibilities vary at Tackle from DevOps, to Design Systems, to bug
          fixes and more. I work mostly with HTML, CSS, JavaScript, Next JS,
          Wordpress, and PHP.
        </small>
        <Link className="flex mt-4 p-0 items-center" href="https://tackle.io">
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">
            Learn more about Tackle
          </p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
      </div>
      {/* work item */}
      <div className="workItem">
        <p>
          <strong>Owner and Creative Developer</strong> at{" "}
          <a href="https://ziondesign.io">Zion Design</a>.
        </p>
        <p className="mb-4 mt-2 italic">August 2018 to Present</p>
        <small>
          Since 2018 I have been operating a small design and development studio
          called Zion Design. Since I have worked with hundreds of brands and
          products to create visual identities and websites.
        </small>
        <Link
          className="flex mt-4 p-0 items-center"
          href="https://ziondesign.io"
        >
          <p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">
            Learn more about Zion Design
          </p>
          <div className="w-4 h-4">
            <ArrowUpRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
