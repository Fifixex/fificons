// @ts-check
import './font.js'
import { resolve } from 'node:path'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { __dirname } from './dirname.js'
import { optimizeSVGO } from './optimize.js'

const directory = resolve(__dirname, '..', 'icons')
const icons = readdirSync(directory).filter((file) => file.endsWith('.svg'))

for (const file of icons) {
	const filePath = resolve(directory, file)
	const buffer = readFileSync(filePath)
	writeFileSync(filePath, await optimizeSVGO(filePath, buffer))
}
