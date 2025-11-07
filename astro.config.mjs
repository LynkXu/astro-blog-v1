// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://zishu.me',
	integrations: [mdx(), sitemap()],
	devToolbar: {
		enabled: false, // 是否开启开发工具栏
	},
});
