import { ethers, BigNumber } from 'ethers';
import contracts from '../lib/contracts.mjs';

const address = process.env.ACCOUNT_ADDRESS;
const key = process.env.ACCOUNT_KEY;
const amount = BigNumber.from(10).pow(16).mul(42); // 0.42 

const goerliExplorer = 'https://goerli.etherscan.io/';
const goerliUrl = `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`;
const goerliProvider = new ethers.providers.JsonRpcProvider(goerliUrl);
const goerliSigner = new ethers.Wallet(key, goerliProvider)

const mumbaiExplorer = 'https://explorer-mumbai.maticvigil.com/';
const mumbaiUrl = `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_API_KEY}`;
const mumbaiProvider = new ethers.providers.JsonRpcProvider(mumbaiUrl);
const mumbaiSigner = new ethers.Wallet(key, mumbaiProvider);


const goerliManagerContract = new ethers.Contract(contracts.goerli.manager.address, contracts.goerli.manager.abi, goerliSigner);
console.log(goerliExplorer + 'address/' + contracts.goerli.manager.address);
const mumbaiWETHContract = new ethers.Contract(contracts.mumbai.WETH.address, contracts.mumbai.WETH.abi, mumbaiSigner);
console.log(mumbaiExplorer + 'address/' + contracts.mumbai.WETH.address);

const txEth = await goerliManagerContract.depositEtherFor(address, { value: amount, gasLimit: "1000000" });
console.log(goerliExplorer + 'tx/' + txEth.hash);
await txEth.wait();

// const txMatic = await mumbaiWETHContract.withdraw(amount, { from: address });
// console.log(mumbaiExplorer+ 'tx/' + txMatic.hash);
// await txMatic.wait();

// const exitCalldata = await maticPOSClient
//   .exitERC20(burnTxHash, { from, encodeAbi: true })

// await mainWeb3.eth.sendTransaction({
//   from: userAddress,
//   to: rootChainManagerAddress,
//   data: exitCalldata.data
// })
