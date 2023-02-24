import webpack from "webpack-stream";
import webPackConfig from '../webpack.prod.js';

export const push = () => {
	return app.gulp.src(app.path.src.push)
		.pipe(app.gulp.dest(app.path.build.push));
}