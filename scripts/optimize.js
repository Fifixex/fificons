import { Buffer } from 'node:buffer'
import { optimize } from 'svgo'

/**
 *
 * @param {string} filePath - The path to the file
 * @param {Buffer} buffer - The file buffer
 * @returns {Promise<Buffer>}
 */
export const optimizeSVGO = async (filePath, buffer) =>
    Buffer.from(optimize(buffer.toString(), { path: filePath }).data)
