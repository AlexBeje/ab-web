import copy from "rollup-plugin-copy-watch";
import del from "rollup-plugin-delete";
import dev from "rollup-plugin-dev";
import livereload from 'rollup-plugin-livereload'
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
        { src: "index.html", dest: "public/" },
        { src: "images", dest: "public/" },
      ],
      watch: ["index.html", "images"],
    }),
    dev({
      dirs: ["public"],
      host: "localhost",
      port: 8080,
      silent: true,
    }),
    del({
      targets: "public/images",
    }),
    livereload(),
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
