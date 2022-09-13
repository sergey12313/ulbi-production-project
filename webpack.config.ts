import  path  from "path"
import webpack from "webpack";


import {BuildMode, BuildOptions, BuildPaths} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";


const mode:BuildMode =  "development";
const isDev = mode === "development"

const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html"),
}
const buildOptions: BuildOptions = {
    paths: buildPaths,
    mode,
    isDev
}


const config: webpack.Configuration = buildWebpackConfig(buildOptions)

export default config