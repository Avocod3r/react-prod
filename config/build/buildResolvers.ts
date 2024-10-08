// eslint-disable-next-line import/no-extraneous-dependencies
import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {},

  };
}
