/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

const siteConfig = {
  title: "Create Console App",
  tagline: "Set up a modern web app by running one command.",
  url: "https://create-react-app.dev",
  baseUrl: "https://vinhmai1tikivn.github.io/docusaurus-demo/",
  projectName: "create-react-app",
  organizationName: "facebook",
  favicon: "img/favicon/favicon.ico",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.json"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/logo-og.png",
    navbar: {
      title: "Tiki Console Docs",
      logo: {
        alt: "Tiki Console Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "docs/getting-started", label: "Docs", position: "right" },
        {
          href: "https://console.tala.xyz/apps",
          label: "Console",
          position: "right",
        },
      ],
    },
  },
};

module.exports = siteConfig;
