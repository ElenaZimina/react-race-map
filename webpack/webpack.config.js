import config from '../config'

import { entry, output, resolve } from './options/_common'
import { plugins } from './options/_plugins'
import { rules } from './options/_rules'

const webpackConfig = {
  name: 'client',
  target: 'web',
  cache: true,
  devtool: config.compiler_devtool,
  resolve,
  entry,
  output,
  plugins,
  module: {
    rules
  }
};

export default webpackConfig
