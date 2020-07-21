import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "script/main.js",
  output: {
    file: "build/js/main.min.js",
    format: "esm",
  },
  treeshake: false,
  plugins: [
    scss({
      output: "./build/css/main.css",
      sass: require("sass"),
      outputStyle: "compressed",
      watch: "css",
    }),
    terser(),
  ],
};
