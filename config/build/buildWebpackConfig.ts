import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";

export const buildWebpackConfig = ({mode, paths}: BuildOptions): webpack.Configuration => {
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
            rules: buildLoaders()
        },
        plugins: buildPlugins(paths)
    }
}