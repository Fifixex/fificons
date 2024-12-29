import { FontAssetType, generateFonts } from 'fantasticon'
import { URL } from 'node:url'
import { resolve } from 'node:path'

const __dirname = new URL('.', import.meta.url).pathname

generateFonts({
	name: 'Fificons',
	inputDir: resolve(__dirname, '..', 'icons'),
	outputDir: resolve(__dirname, '..', 'dist'),
	fontTypes: [
		FontAssetType.EOT,
		FontAssetType.TTF,
		FontAssetType.WOFF,
		FontAssetType.WOFF2
	]
})
