---
slug: account-abstraction-basics
title: Account Abstraction Basics
authors: albertorio.eth
tags: [layer-2, rollups, ux, ui, wallets, infrastructure]
---

## 👛 The Overview
I will be covering some ideas around Account Abstraction. This new tool is currently implemented on [zkSync](https://docs.zksync.io/userdocs/), a layer-2 network, to significantly improve the user experience on web3. 

### 🪄 The Magic: 
With Account Abstraction, we can adapt accounts to business logic needs instead of adapting business logic needs to accounts. 

### 🤫 The Secret: 
The breakthrough is that Account abstraction allows organizations to create curated web3 experiences to smoothen onboarding, security, and retention. It's the holy trinity of usability. This means that we can have web2-like user experiences while maintaining web3 self-custody.

### 🔍 The Deets: 
By treating smart contract accounts at the same level as Externally Owned Accounts (EOA), we can break free from the EOA's hardcoded assumptions. Accounts are abstracted because now the implementation and the interface are decoupled, allowing for customizable accounts only limited by your imagination. 


### Account Abstraction Example
A great example of Account Abstraction can be found in [Raise Finance's Blog](https://raisefinance.medium.com/the-power-of-account-abstraction-technical-overview-of-the-raisepay-wallet-8e8c43dee64f).

### Paymasters: Account Abstraction Extended
[Paymasters](https://v2-docs.zksync.io/dev/developer-guides/aa.html#paymasters) are an extension of Account Abstraction. They allow third parties to subsidize users' gas fees or pay fees in ANY token. For example, one could pay ETH gas fees in USDC of DAI. Additionally, they can be used for rewarding certain types of on-chain activity.

<!--truncate-->

### MultiSig Wallets As a Primitives
An emerging primitive are [multi-signature smart contract based wallets](https://blog.logrocket.com/security-choices-multi-signature-wallets/), like [Gnosis Safe](https://github.com/safe-global/safe-contracts) or [Argent](https://www.argent.xyz/learn/what-is-a-multi-sig/). With Account Abstraction smart contract, accounts become first-class citizens, allowing us to innovate around a wallet's logic. We can eliminate the need to interact directly with seed phrases (aka secret recovery phrases) through social recovery, limit harmful DApps, make social recovery more intuitive, and other features. 

If you'd like to experiment with Account Abstraction, give this [multi-signature wallet tutorial](https://github.com/tesla809/multisig-tutorial) a look and a star on GitHub. If you have questions, use the [Github Discussions](https://github.com/tesla809/multisig-tutorial/discussions) feature and start a chat!

If you'd like to [deploy a multi-signature wallet using account abstraction check out zkSync](https://v2-docs.zksync.io/dev/tutorials/custom-aa-tutorial.html)! zkSync supports Account Abstractions natively!

<!--truncate-->

## DApp Suggestions

Here are some DApp suggestions which can help juice your imagination with some cool applications of account abstraction. These are centered around the three following concepts which need dire improvement in web3:

- **Security** to increase safety and self-custody for users
- **Onboarding** to attract users and simplify interactions, reduced number of steps, or clicks.
- **Retention** to keep users.
- **Referral** to grow your users.

### Improve Security

You can improve **security using account abstractions** via:

- multi-factor authentication via any medium: Gmail, Google Auth, etc.

- Fraud monitoring service, where the service is of the multi-sigs wallet signers: if compliance rules work, sign.

- General abstraction for plug-and-play services: easily add fraud monitoring, KYC, or any arbitrary service.

- Allow / block lists of dapps to use: create safe and curated experiences with approved dapps.

- Safe transactions training wheels: create a safe and curated experience with limits on trading size, margin, and assets, or certain types of transactions based on expertise.

- Intra-net accounts: create an intra-net of accounts with different tiers and permissions to increase security. Supercharge with easily generated common templates and links between accounts. Abilities include: hierarchy of wallets with different permissions, accounts for internal payments within intra-net, limited accounts for external payments, etc.

- Custom wallet generators: easy to create interlinked custom accounts with customizable functionality, using visual GUI tools. Think IFTT meets [ETH.Build](http://ETH.Build), meets Your Favorite Wallet.

- Innovations in social recovery: friends, mechanisms for anons to provide service for social recovery, better visual design language for social recovery.

- Emergency Escape Hatches: Easy to recover L2→L1 funds via innovations in emergency escape hatches.

- Innovations on vaults for safe storage: Deadman switches, account vaults for short-term assets to trade, and long-term assets to hold with different permissions. For example, add customizable default locks like a 1-week minimum lock for long-term assets to prevent stealing.

- Multi-address model wallets: easily generate and manage a new account address for each new application using account abstraction.

### Improve Onboarding

You can improve **onboarding using account abstractions and Paymasters** via:

- paying the gas fees for users with Paymasters.

- paying bills and fees with ERC20 tokens like USDC.

- session keys: approve all transactions under certain customizable conditions.

- multi-calls: no more signing several transactions. Now you can batch transactions for a better flow.

### Improve Retention

You can improve **retention** via:

- Using Paymasters to reward on-chain activity like paying fees or a percentage of fees for users that meet a certain threshold.

- Using account abstraction to help increase the utility of assets.


### Improve Referrals

You can improve **referrals** via:

- Rewarding referral of other users via certain types of codes. 

<!--truncate-->

## Exploring Account Abstraction on zkSync
❤️ **zkSync** is a **[ZK rollup](https://v2-docs.zksync.io/dev/fundamentals/rollups.html#what-are-zk-rollups)** layer 2, a trustless protocol that uses cryptographic validity proofs to provide scalable and low-cost transactions on Ethereum. zkSync supports smart contracts are written in Solidity/Vyper and can be called using the same clients as the other EVM-compatible chains.

If you'd like to learn more about [how to use Account Abstraction give this tutorial](https://v2-docs.zksync.io/dev/tutorials/custom-aa-tutorial.html#prerequisite) a look.

If you'd like to learn more in depth about Account Abstraction, check out [read this article](https://www.argent.xyz/blog/wtf-is-account-abstraction/) and [DevCon 5 presentation](https://archive.devcon.org/archive/watch/6/why-account-abstraction-is-a-game-changer-for-dapps/?tab=YouTube) by Argent.

<!--truncate-->

## Share your projects!

These are some interesting use cases that can help you create some amazing applications. Share your projects! We'd love to see what you build!

Join our [Discord](https://discord.gg/PqVhBKxSKb) and submit a pull request. We'd love to feature your project!








