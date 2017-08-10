import path from 'path'
import yargs from 'yargs'

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProd = env === 'production';

const branch = yargs.argv.branch;
const isDemo = branch !== 'master';
let pathBase = path.resolve(__dirname, '../');

let config = {
  env : env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: pathBase,
  path_dist: pathBase + '/dist',
  path_client: pathBase + '/app',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host : 'localhost',
  server_port : process.env.PORT || 5065,
  webpack_port : process.env.PORT || 5066,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_devtool   : !isProd ? 'eval-source-map' : null,
  compiler_enable_hmr: false,
  compiler_public_path: '',

  // ------------------------------------
  // Environment
  // ------------------------------------
  globals: {
    'process.env'  : {
      'NODE_ENV' : JSON.stringify(env)
    },
    'NODE_ENV'     : env,
    '__DEMO__': isDemo,
    '__DEBUG__'    : !isProd
  }

};

export default config;
