// Next Imports
import Head from 'next/head';

// Component Imports
import Intro from '../components/Intro';
import About from '../components/Skills';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Bridger Tower | Design and Code</title>
				<meta
					name="description"
					content="Bridger Tower | Front End Developer and Designer from Salt Lake City, Utah"
				/>
				<link rel="icon" href="/icon.jpeg" />
			</Head>

			<main>
				<Intro />
				<About />
			</main>
		</div>
	);
}
