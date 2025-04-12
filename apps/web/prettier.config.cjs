module.exports = {
    // 기본 포맷팅 규칙
    semi: true,
    trailingComma: "es5",
    singleQuote: false,
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    bracketSpacing: true,
    arrowParens: "always",
    quoteProps: "consistent",
    proseWrap: "always",
    endOfLine: "auto",

    // import 정렬 규칙 (Trivago 플러그인용)
    importOrder: ["^node:", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
};
