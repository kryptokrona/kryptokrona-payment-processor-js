import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import 'src/theme/global.scss';`
			}
		}),
	],
	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code === 'css-semicolonexpected' || code === 'css-ruleorselectorexpected' || code === 'css-unused-selector')
			return;
		handler(warning);
	}
};

export default config;
