import copy from "rollup-plugin-copy";
import dev from "rollup-plugin-dev";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "js/main.js",
  output: {
    file: "build/js/main.min.js",
    format: "esm",
  },
  plugins: [
    copy({
      targets: [{ src: "build/assets/*", dest: "assets" }],
    }),
    dev({
      dirs: ["build"],
      host: "localhost",
      port: 8080,
      silent: true,
    }),
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
