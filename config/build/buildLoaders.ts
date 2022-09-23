import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): Array<RuleSetRule> => {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const babelLoader: RuleSetRule = {
    test: /\.(js|tsx|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const svgrLoader: RuleSetRule = {
    test: /\.svg$/,
    use: {
      loader: '@svgr/webpack',
      options: {
        typescript: true,
        ext: 'tsx',
      },
    },
  };
  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            auto: (resPath: string) => resPath.includes('.module'),
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('dart-sass'),
        },
      },
    ],
  };

  return [sassLoader, babelLoader, typescriptLoader, svgrLoader, fileLoader];
};
