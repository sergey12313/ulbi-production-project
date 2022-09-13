import {RuleSetRule} from "webpack";

export const buildLoaders = (): Array<RuleSetRule> => {
    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
            typescriptLoader
    ]
}