import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Previous() {
  return (
		<div className="mt-12">
			<h4 className="text-lg">Previously</h4>

			{/* work item */}
			<div className="workItem">
				<div className="flex flex-wrap gap-1 items-center">
					{/* title */}
					<strong>Founding Product Designer</strong>at
					{/* link and company */}
					<a className="flex items-center" href="https://ampry.com">
						<p className="transition-[400ms] pr-1 hover:pr-2">Ampry</p>
						<div className="w-4 h-4">
							<ArrowUpRightIcon />
						</div>
					</a>
				</div>
			</div>

			{/* work item */}
			<div className="workItem">
				<div className="flex flex-wrap gap-1 items-center">
					{/* title */}
					<strong>Web Developer</strong>at
					{/* link and company */}
					<a className="flex flex-wrap items-center" href="https://innovationexchange.com">
						<p className="transition-[400ms] pr-1 hover:pr-2">Innovation Exchange</p>
						<div className="w-4 h-4">
							<ArrowUpRightIcon />
						</div>
					</a>
				</div>
			</div>

			{/* work item */}
			<div className="workItem">
				<div className="flex flex-wrap gap-1 items-center">
					{/* title */}
					<strong>Web Designer</strong>at
					{/* link and company */}
					<a className="flex flex-wrap items-center" href="https://inclinemarketing.com">
						<p className="transition-[400ms] pr-1 hover:pr-2">Incline Marketing</p>
						<div className="w-4 h-4">
							<ArrowUpRightIcon />
						</div>
					</a>
				</div>
			</div>

			{/* work item */}
			<div className="workItem">
				<div className="flex flex-wrap gap-1 items-center">
					{/* title */}
					<strong>Marketing Designer</strong>at
					{/* link and company */}
					<a className="flex flex-wrap items-center" href="https://asiliglobal.com">
						<p className="transition-[400ms] pr-1 hover:pr-2">Asili Global</p>
						<div className="w-4 h-4">
							<ArrowUpRightIcon />
						</div>
					</a>
				</div>
			</div>

			{/* work item */}
			<div className="workItem">
				<div className="flex flex-wrap gap-1 items-center">
					{/* title */}
					<strong>Graphic Designer</strong>at
					{/* link and company */}
					<a className="flex flex-wrap items-center" href="https://byu.edu">
						<p className="transition-[400ms] pr-1 hover:pr-2">Brigham Young University</p>
						<div className="w-4 h-4">
							<ArrowUpRightIcon />
						</div>
					</a>
				</div>
      </div>

		</div>
	);
}
