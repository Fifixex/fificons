import { FontAssetType, generateFonts } from 'fantasticon'
import { resolve } from 'node:path'
import { __dirname } from './dirname.js'

generateFonts({
	name: 'Fificons',
	inputDir: resolve(__dirname, '..', 'icons'),
	outputDir: resolve(__dirname, '..', 'fonts'),
	fontTypes: [
		FontAssetType.EOT,
		FontAssetType.TTF,
		FontAssetType.WOFF,
		FontAssetType.WOFF2
	]
})
