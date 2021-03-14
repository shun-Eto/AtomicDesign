const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

//	System Environment Variable
const DOMAIN_CLIENT_COMPANY = JSON.stringify("http://localhost:8080");
const MONGO_URI = JSON.stringify(
	"mongodb+srv://shun:Shun_831510@sopherre.hrdc0.mongodb.net/Sopherre"
);
const SENDGRID_API = JSON.stringify(
	"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"
);

//	config
const config = merge(baseConfig, {
	mode: "development",
	watch: true,
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				DOMAIN_CLIENT_COMPANY,
				MONGO_URI,
				SENDGRID_API,
			},
		}),
	],
});

module.exports = config;
