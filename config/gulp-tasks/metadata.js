import webpack from "webpack-stream";
import webPackConfig from '../webpack.prod.js';

export const metadata = () => {
	return app.gulp.src(app.path.src.metadata)
		.pipe(app.gulp.dest(app.path.build.metadata));
}