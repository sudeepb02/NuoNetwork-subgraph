# Nuo Network - Subgraph

Nuo bills itself as the easiest way to lend, borrow or margin trade on Ethereum. It has a decentralized - and complex - smart contract architecture which we thought would be a good candidate to be indexed with The Graph.

We've indexed all the key events in Nuo's `Kernel`, `Account`, `AccountFactory`, `Config`, `AccountFactoryV2`, `MKernel`, `Reserve`, `DSGuard`, `ReserveEscrow`, `KernelEscrow`, `KyberConnector` and `UniswapConnector` contracts.

For our example dapp, we focused on summarizing the overall protocol and offering some insights into the tokens users stake as collateral and the reasons users default on their loans.