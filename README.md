# Web3CryptoDev

Learn Web3 development from Zero to Mastery.

Our goal is to create a running series covering Solidity and all things Web3 development.

As a result of this, we will connect devs to devs and build a community around building, innovation and mutual help.

See the website:
[web3cryptodev.com](https://www.web3cryptodev.com/)

## Our mission

**Easy to use**  
Designed with open source contributions from people like you! Our community aims to teach developers how to quickly learn and apply web3 development skills.

**Focus on What Matters**  
Focus on what matters. Explore what real web3 developers do day to day. Go beyond "Hello World" tutorials. Go deeper and explore the depths of web3. We combine theory with real-world examples.

**Powered by the Commmunity**  
Leverage our collective knowledge. Strive to make one small contribution. The sum is greater than the whole!

**Ship, ship, ship**  
Don't let the perfect be the enemy of the good. Shipping and improving via iterations is preferable to analysis paralysis.

## The Approach

Move fast and break things. Content will be written and published quickly every weekday.

Then we will solicit community feedback through [issues](https://github.com/tesla809/BuildersETH) and [pull requests](https://github.com/tesla809/BuildersETH/pulls) for fixes.

The work is **NOT** perfect. In fact, most of it needs heavy proof reading and will be edited over time.

Build -> Write -> Publish -> Edit in public

## Contributions Wanted

Have a topic you’d like to contribute or want to learn about? Feel free to open an issue:
https://github.com/tesla809/BuildersETH/issues

Want to submit to the blog, lesson, lesson fix, or image/logo?

Submit a [pull requests](https://github.com/tesla809/BuildersETH/pulls).

Any and all feedback is appreciated <3!

## Things to do - Turn to issues

### Technical To Do list

Move these to issues.

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
- [ ] go thru [sample tutorial](https://www.raresportan.com/how-to-make-a-code-editor-with-codemirror6/)
- [ ] Add newsletter via open source
- [ ] add metrics to see engagement

### Research parts

So to make the Solidity parts fun to play with I will need:
[ ] Code Editor - possibly Codemirror6
[ ] terminal - possibly Codemirror6 or xTerm and node-pty
[ ] possibly a runtime - ts-node
[ ] ganache - to model / interact with local Ethereum network in browser

#### To investigate

[ ] [@ethereumjs/vm](https://www.npmjs.com/package/ethereumjs-vm-fork/v/5.5.3) - runs ethereum VM inside browser
[ ] [Remix IDE package.json](https://github.com/ethereum/remix-project/blob/master/package.json) - Dumpster dive into Remix IDE to see how they have the EVM working inside of a stand along browser.
[ ] [node-pty](https://www.npmjs.com/package/node-pty) - To allow NodeJS to interact with xTerm or Codemirror based terminal.
[ ] [node-pty and xterm tutorial](https://www.youtube.com/watch?v=vhDBbbMJWoY) - example to do the above.
[ ] [Ganache](https://trufflesuite.github.io/ganache/) - Ganache online IDE proof of concept.
[ ] [Ganache](https://github.com/trufflesuite/ganache/blob/develop/docs/assets/js/inject-editor.js) - injected editor used by above proof of concept for Ganache.
[ ] [node mirror](https://github.com/soliton4/nodeMirror) - an IDE in Node

### Community

- [ ] Get more fellow big brains to get down and buidl.

## Boilerplate Mumbo Jumbo

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
