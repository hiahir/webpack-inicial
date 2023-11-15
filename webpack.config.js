const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /style\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "file-loader"
            }
        ],
    },
    optimization: {
        // Add any desired optimization options here
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Mi webpack app",
            template: "./src/index.html", // Point to the HTML file that needs to be processed
            filename: "index.html", // Specify the output file name
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[fullhash].css",
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets/", to: "assets/" },
            ]
        })
    ],
};
