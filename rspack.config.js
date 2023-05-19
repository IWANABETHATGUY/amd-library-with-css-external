/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	mode: "development",
	entry: {
		main: "./src/index.js"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		],
	},
	output: {
		library: "NamedLibrary",
		libraryTarget: "amd"
	}
};
module.exports = config;
