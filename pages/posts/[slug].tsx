// import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const components = {
	Head,
	Image,
	Link
};

type PostPageProps = {
	// source: MDXRemoteSerializeResult;
	frontMatter: PostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
	const customMeta: MetaProps = {
		title: `${frontMatter.title} - Hunter Chang`,
		description: frontMatter.description,
		image: `${frontMatter.image}`,
		date: frontMatter.date,
		type: 'article'
	};
	return (
		<>
			<Head>
				<title>{frontMatter.title}</title>
				<meta name="description" content={frontMatter.description} />
				<meta property="og:image" content={frontMatter.image} />
				<meta property="og:title" content={frontMatter.title} />
				<meta property="og:description" content={frontMatter.description} />
			</Head>

			<Link className="flex gap-1 items-center transition-all hover:opacity-50 mb-12" href="/">
				<div className="w-4 h-4">
					<ArrowLeftIcon />
				</div>
				<p className="my-4">Back to Writings</p>
			</Link>

			<article>
				<h1>{frontMatter.title}</h1>
				<p>{frontMatter.date}</p>
				<div>
					<MDXRemote {...source} components={components} />
				</div>
			</article>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [
				rehypeSlug,
				rehypeCodeTitles,
				rehypePrism,
				[
					rehypeAutolinkHeadings,
					{
						properties: {
							className: ['anchor']
						}
					}
				]
			],
			format: 'mdx'
		},
		scope: data
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false
	};
};

export default PostPage;
