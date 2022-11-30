export default function Skills() {
	return (
		<div id="about">
			<div className="my-16">
				<p className="mb-12">
					Here are some of the skills and instruments that I employ in each of the three areas:
				</p>

				<h4 className="text-2xl">Design</h4>

				<ul className="mb-12 p-4 xl:p-8 rounded-xl">
					<li>Branding</li>
					<li>User Experience Design (UX Design)</li>
					<li>Aesthetics</li>
					<li>Design Systems</li>
					<li>Figma and Prototyping</li>
					<li>Wireframing</li>
					<li>Site Architecture</li>
				</ul>

				<h4 className="text-2xl">Marketing</h4>

				<ul className="mb-12 p-4 xl:p-8 rounded-xl">
					<li>Search Engine Optimization (SEO)</li>
					<li>Conversion Rate Optimization (CRO)</li>
					<li>Landing Pages and Sales Funnels</li>
					<li>Web-focused Copy Writing</li>
					<li>Social Optimization (ex. opengraph protocal)</li>
					<li>Paid Ads and Organic Traffic</li>
					<li>Advertising Best Practices</li>
				</ul>

				<h4 className="text-2xl">Development and Coding</h4>

				<div className="flex xl:gap-6 gap-4 flex-col xl:flex-row">
					<div className="ul p-4 xl:p-8 rounded-xl xl:w-1/2">
						<h5 className="bold">Technologies in Use ✅</h5>
						<ul>
							<li>
								<a href="https://nextjs.org">Next JS</a> and{' '}
								<a href="https://beta.reactjs.org/">React</a>
							</li>
							<li>
								<a href="https://www.typescriptlang.org/">TypeScript</a>
							</li>
							<li>
								<a href="https://svelte.dev">Svelte</a> and{' '}
								<a href="https://kit.Svelte.dev">SvelteKit</a>
							</li>
							<li>
								<a href="https://js.info">Javascript</a> and{' '}
								<a href="https://www.json.org/json-en.html">JSON</a>
							</li>
							<li>
								<a href="https://webflow.com">Webflow</a> and their CMS
							</li>
							<li>
								<a href="https://wordpress.org">Wordpress</a> and some{' '}
								<a href="https://www.php.net/">PHP</a>
							</li>
							<li>
								<a href="https://shopify.com">Shopify</a> and{' '}
								<a href="https://shopify.dev/api/liquid">Liquid</a>
							</li>
						</ul>
					</div>
					<div className="ul p-4 xl:p-8 rounded-xl xl:w-1/2">
						<h5 className="bold">Dev Learning Roadmap 🚗</h5>
						<ul>
							<li>React Native and Swift</li>
							<li>
								<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">
									Web APIs
								</a>
							</li>
							<li>Backend Development for Web Applications</li>
							<li>Continual Mastery of JS, CSS, and HTML</li>
							<li>Always be Learning and Building</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
