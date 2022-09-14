import { ProgressPlugin, WebpackPluginInstance} from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPaths} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (paths: BuildPaths): Array<WebpackPluginInstance> => {
    return [
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            template: paths.html,
            inject: "body"
        }),
    ]}