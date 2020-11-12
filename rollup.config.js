import dev from "rollup-plugin-dev";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/js/main.js",
  output: {
    file: "src/build/js/main.min.js",
    format: "cjs",
  },
  plugins: [
    dev({
      dirs: ["src/build"],
      host: "localhost",
      port: 8080,
      silent: true,
    }),
    scss({
      output: "src/build/css/main.css",
      sass: require("sass"),
      outputStyle: "compressed",
      watch: "src/css",
    }),
    terser({
      compress: false,
      mangle: false,
      module: true,
    }),
  ],
  treeshake: false,
};
