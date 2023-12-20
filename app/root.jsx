// import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import mainStyles from "~/styles/main.css";

// export const links = () => [
//   ...(cssBundleHref
//     ? [{ rel: "stylesheet", href: cssBundleHref }]
//     : [{ rel: "stylesheet", href: mainStyles }]),
// ];

export const links = () => [{ rel: "stylesheet", href: mainStyles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
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