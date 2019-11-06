# Nuo Network - Subgraph

Nuo bills itself as the easiest way to lend, borrow or margin trade on Ethereum. It has a decentralized - and complex - smart contract architecture which we thought would be a good candidate to be indexed with The Graph.

We've indexed all the key events in Nuo's `Kernel`, `Account`, `AccountFactory`, `Config`, `AccountFactoryV2`, `MKernel`, `Reserve`, `DSGuard`, `ReserveEscrow`, `KernelEscrow`, `KyberConnector` and `UniswapConnector` contracts.

For our example dapp, we focused on
- Offering user analysis by address
- Summarizing the overall protocol
- Offering insights into the tokens user stake as collateral
- Offering insights into why users default on their loans

### To Run the Dapp
- Clone repo
- `cd dapp`
- `npm install`
- `npm start`

