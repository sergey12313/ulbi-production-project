import  path  from "path"
import webpack from "webpack";
import {BuildEnv, BuildMode, BuildOptions, BuildPaths} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";





export default  (env: BuildEnv):webpack.Configuration => {

    const mode: BuildMode =  env.mode || "development"
    const PORT =  env.port && parseInt(env.port, 10) || 3000

    const isDev = mode === "development"

    const buildPaths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, 'src')
    }
    const buildOptions: BuildOptions = {
        paths: buildPaths,
        mode,
        isDev,
        port: PORT
    }


    return buildWebpackConfig(buildOptions)
}