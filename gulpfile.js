const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const webpack = require("webpack");
const webpackGulp = require("webpack-stream");

gulp.task("styles", () => {
  return gulp
    .src("assets/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("./static/css/"));
});

gulp.task("scripts", () => {
  return gulp
    .src("assets/js/main.js")
    .pipe(
      webpackGulp(
        {
          mode: "development",
          module: {
            rules: [
              {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                },
              },
            ],
          },
        },
        webpack
      )
    )
    .pipe(gulp.dest("./static/js/"));
});

gulp.task("watch", () => {
  gulp.watch("assets/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("assets/js/**/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.series(["styles"]));
