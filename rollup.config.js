import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "js/main.js",
  output: {
    file: "build/js/main.min.js",
    format: "esm",
  },
  plugins: [
    scss({
      output: "./build/css/main.css",
      sass: require("sass"),
      outputStyle: "compressed",
      watch: "css",
    }),
    terser({
      compress: false,
      mangle: false,
      module: true,
    }),
  ],
  treeshake: false,
};
