import type { Config as SVGOConfig } from 'svgo'
export const OPTIONS = {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
} as SVGOConfig