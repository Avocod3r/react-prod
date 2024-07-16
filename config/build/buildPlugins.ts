// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlWebpackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths: { html },
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [new HtmlWebpackPlugin({ template: html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
