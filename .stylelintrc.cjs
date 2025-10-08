/**
 * ✅ Stylelint Config for Multi-Layer Token Structure
 * 🎯 목적: design / ui 토큰 계층을 분리하고 네이밍 규칙 통제
 * ⚙️ 적용 대상: CSS, Vue SFC <style>, PostCSS 환경
 */

module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    /* -------------------------------
     * 💡 커스텀 프로퍼티 네이밍 규칙
     * ----------------------------- */
    "custom-property-pattern": [
      // 허용되는 prefix 목록:
      // --color-, --space-, --font-  → design token
      // --comp-[component]-[property] → ui token
      "^(color|space|font|comp-[a-z0-9-]+)-[a-z0-9-]+$",
      {
        message:
          "❌ 변수명은 --color-, --space-, --font-, --comp-[컴포넌트명]- 접두어 중 하나를 사용해야 합니다.",
      },
    ],

    /* -------------------------------
     * 🔒 !important 금지 (테마 계층 제외)
     * ----------------------------- */
    "declaration-no-important": [
      true,
      {
        severity: "error",
        message: "❌ !important 사용 금지 — 테마 계층에서만 허용하세요.",
      },
    ],

    /* -------------------------------
     * 🎯 빈 블록 방지 / 정렬 규칙
     * ----------------------------- */
    "block-no-empty": true,
    "order/properties-alphabetical-order": true,
  },

  /* -------------------------------
   * 📁 경로 기반 규칙 (optional)
   * ----------------------------- */
  overrides: [
    {
      files: ["**/tokens/design/**/*.css"],
      rules: {
        "no-duplicate-custom-properties": [true, {
          message: "❌ 디자인 토큰은 중복 선언할 수 없습니다."
        }],
        "custom-property-pattern": [
          "^(color|space|font)-[a-z0-9-]+$",
          {
            message:
              "🎨 디자인 토큰에는 --color-, --space-, --font- prefix만 허용됩니다.",
          },
        ],
      },
    },
    {
      files: ["**/tokens/ui/**/*.css"],
      rules: {
        "custom-property-pattern": [
          "^comp-[a-z0-9-]+-[a-z0-9-]+$",
          {
            message:
              "🧱 UI 토큰은 --comp-[컴포넌트명]-[속성명] 형식으로 작성하세요.",
          },
        ],
      },
    },
  ],
}
