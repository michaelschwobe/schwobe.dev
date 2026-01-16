import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";

import "./global.css";

export const links: Route.LinksFunction = () => [
  /* fonts (preloaded) */
  {
    rel: "preload",
    href: "/fonts/oswald-v48-latin-300.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/oswald-v48-latin-700.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/roboto-v30-latin-300.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/images/header.webp",
    as: "image",
    type: "image/webp",
  },

  /* favicons/manifest */
  {
    rel: "apple-touch-icon",
    href: "/favicons/apple-touch-icon.png",
    sizes: "180x180",
  },
  {
    rel: "icon",
    href: "/favicons/favicon-32x32.png",
    type: "image/png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "/favicons/favicon-16x16.png",
    type: "image/png",
    sizes: "16x16",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
