import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Back from '../../components/Back';
import { getAllPosts } from '../../lib/api';
import { PostType } from '../../types/post';

type IndexProps = {
	posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
	return (
		<>
			<Back />
			<h1 className="mt-12">Some of my recent Writings</h1>

			{posts.map((post) => (
				<article key={post.slug} className="mt-12">
					<p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
					<h1 className="mb-2 text-xl">
						<Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
							{post.title}
						</Link>
					</h1>
					<p className="mb-3">{post.description}</p>
					<p>
						<Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
							Read More
						</Link>
					</p>
				</article>
			))}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts(['date', 'description', 'slug', 'title']);

	return {
		props: { posts }
	};
};

export default Index;
