import copy from "rollup-plugin-copy";
import dev from "rollup-plugin-dev";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "js/main.js",
  output: {
    file: "public/js/main.min.js",
    format: "esm",
  },
  plugins: [
    copy({
      targets: [
        { src: "images/**", dest: "public/images" },
        { src: "index.html", dest: "public/"}
      ],
    }),
    dev({
      dirs: ["public"],
      host: "localhost",
      port: 8080,
      silent: true,
    }),
    scss({
      output: "./public/css/main.css",
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
