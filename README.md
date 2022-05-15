# Website

## Why?

I want to create something like [beta.reactjs.org](https://beta.reactjs.org/) for web3 and Ethereum Development

## Things to do

### Technical

- [x] Add Katex for Math equations
- [x] Add Solidity syntax highlighting
- [x] Add TypeScript syntax highlighting
- [x] Scaffoled some basics items
- [x] Add codesandbox/sandpack
- [ ] Add typescript to sandpack
- [ ] Add solc to sandpack
- [ ] Figure out how to add assertions in client
- [x] decide between monaco or CodeMirror 6
  - [x] CodeMirror Wins! [Great assessment here](https://blog.replit.com/code-editors)
  - [x] If CodeMirror 6 add [Solidty language support](https://github.com/alincode/codemirror-solidity)
- [ ] Figure out how to add xTerm.js
  - [ ] Wire inputs / outputs in xTerm.js
  - [ ] Connect xterm.js to code editor some how
  - [ ] figure out how to send instructions from both web3JS and Ethersjs
- [ ] Start a DAO because why not?
- [ ] Solve P vs NP
- [ ] ... profit
- [ ] retire to 3rd world country

### Technical

- [ ] Create project to serve as learning base. Maybe Kek NFTs like [CryptoPepes](https://cryptopepes.lol/)
- [ ] Add basic solidity steps - beginner
- [ ] Add web3js / etherjs steps

### Research

- [ ] See how [BUIDLGUIDL](https://buidlguidl.com/) does it.
- [ ] Look into [html-to-react](https://www.npmjs.com/package/html-to-react) to help with turning code mirror 6 into React Code
- [ ] Read [code mirror 6 docs](https://codemirror.net/doc/manual.html)
- [ ] go thru [sample tutorial]]https://www.raresportan.com/how-to-make-a-code-editor-with-codemirror6/()

### Community

- [ ] Get more fellow autists to get down and buidl.

## boilerplate mumbo jumbo

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
