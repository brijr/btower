import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  return (
    <div className="mt-12">
      <h4 className="text-lg">Projects</h4>

      {/* work item */}
      <div className="workItem">
        <p className="flex gap-1 items-center">
          {/* title */}
          <strong>Branding and Web Dev</strong>for
          {/* link and company */}
          <a className="flex items-center" href="https://modelofconfidence.com">
            <p className="transition-[400ms] pr-1 hover:pr-2">Model of Confidence</p>
            <div className="w-4 h-4">
              <ArrowUpRightIcon />
            </div>
          </a>
        </p>
      </div>

      {/* work item */}
      <div className="workItem">
        <p className="flex gap-1 items-center">
          {/* title */}
          <strong>Branding and Web Dev</strong>for
          {/* link and company */}
          <a
            className="flex items-center"
            href="https://remblair.com"
          >
            <p className="transition-[400ms] pr-1 hover:pr-2">
              Rem Blair
            </p>
            <div className="w-4 h-4">
              <ArrowUpRightIcon />
            </div>
          </a>
        </p>
      </div>
    </div>
  );
}
