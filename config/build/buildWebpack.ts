import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {buildLoaders} from "./buildLoaders";


export const buildWebpack = (options): webpack.Configuration => {
    return{
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            !isDev && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
            // new webpack.ProgressPlugin()
        ],
        module: {
            rules: buildLoaders()
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            port: env.port ?? 8000,
            open: true,
        } : undefined
    };
}
