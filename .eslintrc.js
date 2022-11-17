const { configure, presets } = require('eslint-kit');

module.exports = configure({
  presets: [
    presets.imports({
      sort: {
        newline: true,
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^(app|entities|features|pages|processes|shared|widgets)(/.*|$)'],
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
    presets.effector({
      future: true,
    }),
  ],
});
