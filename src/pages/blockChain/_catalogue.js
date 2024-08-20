export default [
  ['区块链的历史', 'history', () => import(/* webpackChunkName: "docs/blockChain/history" */ './docs/1-history.md')],
  ['区块链发展现状', 'current', () => import(/* webpackChunkName: "docs/blockChain/current" */ './docs/2-current.md')],
  ['区块链的概念', 'blockChain', () => import(/* webpackChunkName: "docs/blockChain/blockChain" */ './docs/3-block-chain.md')],
  ['主流区块链', 'chain', () => import(/* webpackChunkName: "docs/blockChain/chain" */ './docs/11-chain.md')],
  ['比特币', 'btc', () => import(/* webpackChunkName: "docs/blockChain/btc" */ './docs/4-btc.md')],
  ['以太坊', 'eth', () => import(/* webpackChunkName: "docs/blockChain/eth" */ './docs/5-eth.md')],
  ['P2P 协议', 'p2p', () => import(/* webpackChunkName: "docs/blockChain/p2p" */ './docs/6-p2p.md')],
  ['加密算法', 'account', () => import(/* webpackChunkName: "docs/blockChain/crypto" */ './docs/7-crypto.md')],
  ['HD 钱包', 'hd', () => import(/* webpackChunkName: "docs/blockChain/hd" */ './docs/8-hd.md')],
  ['数据格式', 'dataType', () => import(/* webpackChunkName: "docs/blockChain/dataType" */ './docs/9-data-type.md')],
  ['共识算法', 'consensus', () => import(/* webpackChunkName: "docs/blockChain/consensus" */ './docs/10-consensus.md')],
  ['主流区块链', 'chain', () => import(/* webpackChunkName: "docs/blockChain/chain" */ './docs/11-chain.md')],
  ['DAPP', 'dapp', () => import(/* webpackChunkName: "docs/blockChain/dapp" */ './docs/12-dapp.md')],
  ['DeFi', 'defi', () => import(/* webpackChunkName: "docs/blockChain/defi" */ './docs/13-defi.md')],
  ['NFT', 'nft', () => import(/* webpackChunkName: "docs/blockChain/nft" */ './docs/14-nft.md')]
];
