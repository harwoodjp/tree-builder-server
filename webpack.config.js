const path = require("path")

module.exports = {
	entry: {
		main: path.resolve(__dirname, "./app/client/Main/bundler.js"),
		admin: path.resolve(__dirname, "./app/client/Admin/bundler.js")
	},
 output: {
    path: path.join(__dirname, './app/client'),
    filename: '[name].bundle.js',
  },

	watch: true,

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/, 
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react"]
				}
			},
		]
	}

};