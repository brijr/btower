import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
		<footer className="my-12 xl:fixed bottom-0 right-0 xl:m-0 xl:p-6 xl:h-full xl:w-1/6">
			<div className="xl:hidden my-12 bg-[#222] dark:bg-[#fefefe] h-[0.5px] w-1/4"></div>

			<div className="mt-8">
				{/* work */}
				<Link className="flex my-2 p-0 items-center" href="/work">
					<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Work</p>
					<div className="w-4 h-4">
						<ArrowUpRightIcon />
					</div>
				</Link>

				{/* writings */}
				<Link className="flex my-2 p-0 items-center" href="/">
					<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Writings</p>
					<div className="w-4 h-4">
						<ArrowUpRightIcon />
					</div>
				</Link>

				{/* LinkedIn */}
				<Link className="flex my-2 p-0 items-center" href="https://linkedin.com/in/brdgr">
					<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">LinkedIn</p>
					<div className="w-4 h-4">
						<ArrowUpRightIcon />
					</div>
				</Link>

				{/* github */}
				<Link className="flex my-2 p-0 items-center" href="https://github.com/brijr">
					<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">GitHub</p>
					<div className="w-4 h-4">
						<ArrowUpRightIcon />
					</div>
				</Link>

				{/* twitter */}
				<Link className="flex my-2 p-0 items-center" href="https://twitter.com/_brijr">
					<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Twitter</p>
					<div className="w-4 h-4">
						<ArrowUpRightIcon />
					</div>
				</Link>

				{/* YouTube */}
				<Link className="flex my-2 p-0 items-center" href="https://youtube.com/@code-craft">
					<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">YouTube</p>
					<div className="w-4 h-4">
						<ArrowUpRightIcon />
					</div>
				</Link>

				{/* insta */}
				<Link className="flex my-2 p-0 items-center" href="https://instagram.com/_brijr">
					<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">Instagram</p>
					<div className="w-4 h-4">
						<ArrowUpRightIcon />
					</div>
				</Link>

				<p className="mt-6">
					Thanks for Visiting. Website created by <a href="https://brijr.dev">Bridger Tower</a>{' '}
					circa 2023.
				</p>
			</div>
		</footer>
	);
}
