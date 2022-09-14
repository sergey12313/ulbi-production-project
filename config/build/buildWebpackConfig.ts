import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths,isDev} = options
    return  {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean: true
        },
        resolve: buildResolvers(),

        module: {
            rules: buildLoaders(options)
        },
        plugins: buildPlugins(paths),
        devtool: isDev ? 'inline-source-map': false,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}