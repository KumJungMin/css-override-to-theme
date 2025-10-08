import type { Plugin } from 'vite'
import { STYLE_ORDER } from '../config/order.js'

/**
 * 빌드 타임 CSS 병합 순서 보장 플러그인
 */
export default function StyleOrderGuard(): Plugin {
  return {
    name: 'style-order-guard',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && asset.type === 'asset') {
          const css = asset.source as string

          // CSS를 미리 정의된 순서에 맞게 재정렬
          const sorted = STYLE_ORDER.map((key) => {
            const regex = new RegExp(
              `\\/\\*.*${key}.*\\*\\/([\\s\\S]*?)(?=\\/\\*|$)`,
              'g'
            )
            const match = regex.exec(css)
            return match ? match[1] : ''
          })
          asset.source = sorted.join('\n\n')
        }
      }
    },
  }
}
