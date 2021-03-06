/* @flow */

import serve from 'koa-static';
import { resolve as pathResolve } from 'path';
import appRootDir from 'app-root-dir';
import projConfig from '../../../config/private/project';

// Middleware to server our client bundle.
export default serve(
  pathResolve(appRootDir.get(), projConfig.bundles.client.outputPath),
  { maxAge: projConfig.browserCacheMaxAge },
);
