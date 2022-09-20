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
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        resolve: buildResolvers(options),

        module: {
            rules: buildLoaders(options)
        },

        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map': false,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}