// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Web3 Crypto Dev",
  tagline: "Learn Web3 from Zero to Mastery",
  url: " https://tesla809.github.io/BuildersETH/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "BuildersETH.github.io", // Usually your GitHub org/user name.
  projectName: "BuildersETH", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  scripts: [
    {
      src: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",
      integrity:
        "sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",
      crossorigin: "anonymous",
      defer: true,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/mhchem.min.js",
      integrity:
        "sha384-5gCAXJ0ZgozlShOzzT0OWArn7yCPGWVIvgo+BAd8NUKbCmulrJiQuCVR9cHlPHeG",
      crossorigin: "anonymous",
      defer: true,
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/tesla809/BuildersETH/issues/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/tesla809/BuildersETH/issues",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: ["@docusaurus/theme-live-codeblock"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorials",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Content",
            items: [
              {
                label: "Tutorials",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/solidity",
              },
              {
                label: "Discord",
                href: "https://discord.gg/PqVhBKxSKb",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Tesla809",
              },
              {
                label: "Email",
                href: "mailto: contact@web3cryptodev.com",
              },
            ],
          },
          {
            title: "Web3",
            items: [
              {
                label: "web3cryptodev.eth",
                href: "https://app.ens.domains/name/web3cryptodev.eth/details",
              },
              {
                label: "web3cryptodev.dao",
                href: "https://ud.me/web3cryptodev.dao",
              },
              {
                label: "Github Repo",
                href: "https://github.com/tesla809/BuildersETH",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with ❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"],
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
