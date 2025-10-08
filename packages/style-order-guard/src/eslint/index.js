import { STYLE_ORDER } from '../config/order.js'

export const rules = {
  'enforce-css-import-order': {
    meta: {
      type: 'problem',
      docs: { description: 'CSS import 순서 (components → utilities → theme)' },
    },
    create(context) {
      return {
        Program(node) {
          const cssImports = node.body
            .filter(
              (n) =>
                n.type === 'ImportDeclaration' &&
                n.source.value.includes('/assets/styles/')
            )
            .map((n) => n.source.value)

          const sorted = [...cssImports].sort((a, b) => {
            const aIdx = STYLE_ORDER.findIndex((key) => a.includes(key))
            const bIdx = STYLE_ORDER.findIndex((key) => b.includes(key))
            return aIdx - bIdx
          })

          cssImports.forEach((imp, i) => {
            if (imp !== sorted[i]) {
              context.report({
                message: `CSS import 순서가 잘못되었습니다. (${STYLE_ORDER.join(
                  ' → '
                )}) 순으로 맞춰주세요.`,
              })
            }
          })
        },
      }
    },
  },
}
