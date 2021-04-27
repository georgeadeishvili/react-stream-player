import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-import-css'

import pkg from './package.json'

export default {
	input: 'src/index.tsx',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			sourcemap: true,
			strict: false
		}
	],
	plugins: [typescript(), css()],
	external: ['react', 'react-dom']
}