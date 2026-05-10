// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository ? repository.split('/') : [undefined, undefined];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && !!owner && !!repo;

// https://astro.build/config
export default defineConfig({
	// Build for project pages in CI and root path for local development.
	site: isGitHubPagesBuild ? `https://${owner}.github.io` : 'http://localhost:4321',
	base: isGitHubPagesBuild ? `/${repo}` : '/',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
