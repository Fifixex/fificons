import { Buffer } from 'node:buffer'
import { optimize } from 'svgo'
import { OPTIONS } from './options'

export const optimizeSVGO = async (filePath: string, buffer: Buffer): Promise<Buffer> => {
    return Buffer.from(
      optimize(buffer.toString(), {
        path: filePath,
        ...OPTIONS,
      }).data
    )
}
