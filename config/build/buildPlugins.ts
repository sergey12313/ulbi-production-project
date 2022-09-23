import webpack, {DefinePlugin, ProgressPlugin, WebpackPluginInstance} from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";


export const buildPlugins = ({paths, isDev}: BuildOptions): Array<WebpackPluginInstance> => {
    const plugins:Array<WebpackPluginInstance>  = [
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        new HtmlWebpackPlugin({
            template: paths.html,
            inject: "body"
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })

    ]
    if(isDev) {
        plugins.push(new ReactRefreshPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }
    return  plugins

}