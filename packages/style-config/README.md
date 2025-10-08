# 🎨 @company/style-config

공통 스타일 규칙 패키지  
디자인 토큰 및 UI 토큰 계층 구조에 맞는 Stylelint 설정을 제공합니다.

## 계층 규칙

| 계층 | Prefix | 예시 |
|------|---------|------|
| Design Tokens | `--color-`, `--space-`, `--font-` | `--color-bg`, `--space-8` |
| UI Tokens | `--comp-[component]-[property]` | `--comp-card-padding-top` |

## 사용법

```bash
pnpm add -D stylelint stylelint-config-standard stylelint-order @company/style-config
