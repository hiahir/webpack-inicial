const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        clean: true,
        filename: "main.[contenthash].js"
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
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    optimization: {
        // Add any desired optimization options here
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
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
