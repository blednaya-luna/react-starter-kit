const { configure, presets } = require('eslint-kit');

module.exports = configure({
  presets: [
    presets.imports({
      sort: {
        newline: true,
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          [
            '^(components|constants|features|hooks|images|pages|services|setup|utils|widgets)(/.*|$)',
          ],
          ['^\\.'],
        ],
      },
    }),
    presets.typescript(),
    presets.prettier({
      singleQuote: true,
      trailingComma: 'all',
    }),
    presets.node(),
    presets.react({
      newJSXTransform: true,
    }),
  ],
});
