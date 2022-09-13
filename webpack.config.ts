import  path  from "path"
import webpack, {ProgressPlugin} from "webpack";
import HtmlWebpackPlugin from  "html-webpack-plugin"


const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[contenthash].js",
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            inject: "body"
        }),

    ],
}

export default config