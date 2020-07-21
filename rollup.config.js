import scss from 'rollup-plugin-scss'

export default {
  input: 'script/main.js',
  output: {
    file: 'build/js/main.min.js',
    format: 'esm'
  },
  treeshake: false,
  plugins: [
    scss(
      {
        output: './build/css/main.css',
        sass: require('sass')
      }
    )
  ]
}