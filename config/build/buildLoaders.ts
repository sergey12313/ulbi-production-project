import {RuleSetRule} from "webpack";

export const buildLoaders = (): Array<RuleSetRule> => {
    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const sassLoader: RuleSetRule =      {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("dart-sass"),
                    },
                },
            ],
        }

    return [
        sassLoader,
        typescriptLoader
    ]
}