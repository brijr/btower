// Next Imports
import Head from 'next/head';

// Component Imports
import Intro from '../components/Intro';
import About from '../components/Skills';
import Cover from '../components/Cover';

// Image Imports
import btower from '../public/btower.svg';

export default function Home() {
	return (
		<>
			<Head>
				<title>Bridger Tower | Design and Code</title>
				<meta
					name="description"
					content="Bridger Tower | Front End Developer and Designer from Salt Lake City, Utah"
				/>
				<link rel="icon" href="/icon.jpeg" />
			</Head>

			<main>
				<Cover />
				<Intro />
				<About />
				<div className="hidden lg:block h-px dark:bg-white w-1/2 my-12 bg-slate-800"></div>
				<div className="hidden gap-2 lg:flex text-sm mb-12">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
						/>
					</svg>
					<p>This has been <a href="https://btower.dev">btower.dev</a> | Thanks for visiting</p>
				</div>{' '}
			</main>
		</>
	);
}
