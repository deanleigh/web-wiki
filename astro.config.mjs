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
			title: 'Web Wiki',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en-GB' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/deanleigh/web-wiki' }],
			sidebar: [
				{ label: 'Overview', slug: 'overview' },
				{
					label: 'Planning and Project Management',
					items: [
						{ label: 'Planning and Project Management Overview', slug: 'planning-and-project-management' },
						{ label: 'Website Preflight Checklist', slug: 'planning-and-project-management/preflight-checklist' },
						{ label: 'Planning and Project Management Roles', slug: 'planning-and-project-management/roles' },
					],
				},
				{
					label: 'Hosting',
					items: [
						{ label: 'Hosting Overview', slug: 'hosting' },
						{ label: 'Hosting Roles', slug: 'hosting/roles' },
					],
				},
				{
					label: 'SEO',
					items: [
						{ label: 'SEO Overview', slug: 'seo' },
						{ label: 'SEO Roles', slug: 'seo/roles' },
					],
				},
				{
					label: 'Security and Compliance',
					items: [
						{ label: 'Security and Compliance Overview', slug: 'security-and-compliance' },
						{ label: 'Security and Compliance Roles', slug: 'security-and-compliance/roles' },
					],
				},
				{
					label: 'Accessibility',
					items: [
						{ label: 'Accessibility Overview', slug: 'accessibility' },
						{ label: 'Accessibility Roles', slug: 'accessibility/roles' },
					],
				},
				{
					label: 'Usability',
					items: [
						{ label: 'Usability Overview', slug: 'usability' },
						{ label: 'Usability Roles', slug: 'usability/roles' },
					],
				},
				{
					label: 'Design',
					items: [
						{ label: 'Design Overview', slug: 'design' },
						{ label: 'Design Roles', slug: 'design/roles' },
					],
				},
				{
					label: 'Content',
					items: [
						{ label: 'Content Overview', slug: 'content' },
						{ label: 'Content Strategy', slug: 'content/content-strategy' },
						{ label: 'Content Model and IA', slug: 'content/content-model-and-ia' },
						{ label: 'Governance, Ownership and Compliance', slug: 'content/governance-ownership-and-compliance' },
						{ label: 'Content Roles', slug: 'content/roles' },
					],
				},
				{
					label: 'Language and Localisation',
					items: [
						{ label: 'Language and Localisation Overview', slug: 'language-and-localisation' },
						{ label: 'Voice, Tone and Spelling', slug: 'language-and-localisation/voice-tone-and-spelling' },
						{ label: 'HTML Lang and Hreflang', slug: 'language-and-localisation/html-lang-and-hreflang' },
						{ label: 'Multilingual URLs', slug: 'language-and-localisation/multilingual-urls' },
						{ label: 'Formatting Dates, Numbers and Addresses', slug: 'language-and-localisation/formatting-dates-numbers-and-addresses' },
						{ label: 'Translation Workflow', slug: 'language-and-localisation/translation-workflow' },
						{ label: 'Language and Localisation Roles', slug: 'language-and-localisation/roles' },
					],
				},
				{
					label: 'Roles and Responsibilities',
					items: [
						{ label: 'Roles and Responsibilities Overview', slug: 'roles' },
					],
				},
			],
		}),
	],
});
