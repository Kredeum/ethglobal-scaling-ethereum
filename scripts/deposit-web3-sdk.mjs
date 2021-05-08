
import pkg from '@maticnetwork/maticjs';
import HDWalletProvider from '@truffle/hdwallet-provider';
const { MaticPOSClient } = pkg;

const address = process.env.ACCOUNT_ADDRESS;
const key = process.env.ACCOUNT_KEY;
const amount = '420000000000000000';

const goerliUrl = `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`;
const goerliProvider = new HDWalletProvider(key, goerliUrl);

const mumbaiUrl = `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_API_KEY}`;
const mumbaiProvider = new HDWalletProvider(key, mumbaiUrl);

const maticPOSClient = new MaticPOSClient({
  network: "testnet",
  version: "mumbai",
  parentProvider: goerliProvider,
  maticProvider: mumbaiProvider,
  posRootChainManager: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
  posERC20Predicate: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',
  posERC721Predicate: '0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b',
  posERC1155Predicate: '0xB19a86ba1b50f0A395BfdC3557608789ee184dC8',
  posEtherPredicate: '0xe2B01f3978c03D6DdA5aE36b2f3Ac0d66C54a6D5',
  parentDefaultOptions: { "from": address },
  maticDefaultOptions: { "from": address },
});
console.log(goerliProvider);
try {
  const tx = await maticPOSClient.depositEtherForUser(address, amount, { from: address });
  console.log(tx.transactionHash) // eslint-disable-line
} catch (e) {
  console.error(e) // eslint-disable-line
}

// await maticPOSClient.burnERC20(childToken, amount, {
//   from
// });

// await maticPOSClient.exitERC20(burnTxHash, { from });
