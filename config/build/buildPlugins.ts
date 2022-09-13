import { ProgressPlugin, WebpackPluginInstance} from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPaths} from "./types/config";

export const buildPlugins = (paths: BuildPaths): Array<WebpackPluginInstance> => {
    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
            inject: "body"
        }),
    ]}