import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase())

export default {
	input: 'src/index.mjs',
	output: [
		{ file: pkg.module, format: 'es', plugins: [ terser() ] },
		{ file: pkg.main, 'format': 'umd', name, plugins: [ terser() ] }
	],
	plugins: [
		svelte(),
		resolve()
	]
}