import { colors } from './src/styles/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				spaceAge: ['SpaceAge', 'sans-serif'],
			},
			colors: {
				...colors,
			},
		},
	},
	plugins: [],
};
export default config;
