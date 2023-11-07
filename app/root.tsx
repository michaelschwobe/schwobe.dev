import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import resumeStylesUrl from '~/styles/resume.css';

export const links: LinksFunction = () => [
  /* styles (preloaded) */
  { rel: 'preload', href: resumeStylesUrl, as: 'style' },
  ...(cssBundleHref
    ? [{ rel: 'preload', href: cssBundleHref, as: 'style' }]
    : []),

  /* fonts (preloaded) */
  {
    rel: 'preload',
    href: '/fonts/oswald-v48-latin-300.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/fonts/oswald-v48-latin-700.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/fonts/roboto-v30-latin-300.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/images/header.webp',
    as: 'image',
    type: 'image/webp',
  },

  /* favicons/manifest */
  {
    rel: 'apple-touch-icon',
    href: '/favicons/apple-touch-icon.png',
    sizes: '180x180',
  },
  {
    rel: 'icon',
    href: '/favicons/favicon-32x32.png',
    type: 'image/png',
    sizes: '32x32',
  },
  {
    rel: 'icon',
    href: '/favicons/favicon-16x16.png',
    type: 'image/png',
    sizes: '16x16',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },

  /* styles */
  { rel: 'stylesheet', href: resumeStylesUrl },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#30838C" />
        <meta name="msapplication-TileColor" content="#30838C" />
        <meta name="apple-mobile-web-app-title" content="Schwobe.dev" />
        <meta name="application-name" content="Schwobe.dev" />
        <meta name="author" content="Michael Schwobe" />
        <link rel="canonical" href="https://schwobe.dev" />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
