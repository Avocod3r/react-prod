// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlWebpackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths: { html },
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }));
  }

  return plugins;
}
