const babel = require('rollup-plugin-babel');

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      presets: [
        '@babel/preset-env'
      ]
    })
  ]
}
