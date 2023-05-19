import * as build from '@remix-run/dev/server-build';
import { createRequestHandler } from '@remix-run/netlify';
import type { ServerBuild } from '@remix-run/node';
import { installGlobals } from '@remix-run/node';

installGlobals();

export const handler = createRequestHandler({
  build: build as ServerBuild,
  mode: process.env.NODE_ENV,
});
