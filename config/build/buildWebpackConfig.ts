import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths: {entry, output}, isDev} = options;
    return {
        mode,
        entry: entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: output,
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}