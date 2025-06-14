import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import compress from "@playform/compress";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";
import keystatic from "@keystatic/astro";

export default defineConfig({
	site: "https://amplify.cosmicthemes.com",
	adapter: cloudflare({
		imageService: "cloudflare",
		platformProxy: true
	}),
	redirects: {
		"/admin": "/keystatic",
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	markdown: {
		shikiConfig: {
			theme: "css-variables",
			wrap: false,
		},
	},
	integrations: [
		AutoImport({
			imports: [
				"@components/Admonition/Admonition.astro",
			],
		}),
		mdx(),
		react(),
		icon(),
		keystatic(),
		sitemap(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: true,
			Image: false,
			SVG: false,
		}),
	],

	vite: {
		plugins: [tailwindcss()],
		build: {
			assetsInlineLimit: 0,
		},
	},
});
