import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	);
}
