import { ethers, BigNumber } from 'ethers';
import contracts from '../lib/contracts.mjs';

const address = process.env.ACCOUNT_ADDRESS;
const key = process.env.ACCOUNT_KEY;
const amount = BigNumber.from(10).pow(16).mul(42); // 0.42 
// const amount = '420000000000000000';

const goerliExplorer = 'https://goerli.etherscan.io/';
const goerliUrl = `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`;
const goerliProvider = new ethers.providers.JsonRpcProvider(goerliUrl);
const goerliSigner = new ethers.Wallet(key, goerliProvider)

const mumbaiExplorer = 'https://explorer-mumbai.maticvigil.com/';
const mumbaiUrl = `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_API_KEY}`;
const mumbaiProvider = new ethers.providers.JsonRpcProvider(mumbaiUrl);
const mumbaiSigner = new ethers.Wallet(key, mumbaiProvider);


const goerliKRMContract = new ethers.Contract(contracts.goerli.krm.address, contracts.goerli.erc20.abi, goerliSigner);
console.log(goerliExplorer + 'address/' + contracts.goerli.krm.address);

const goerliManagerContract = new ethers.Contract(contracts.goerli.manager.address, contracts.goerli.manager.abi, goerliSigner);
console.log(goerliExplorer + 'address/' + contracts.goerli.manager.address);


const txEth = await goerliKRMContract.approve(contracts.goerli.erc20Predicate.address, amount, { gasLimit: "1000000" });
console.log(goerliExplorer + 'tx/' + txEth.hash);
await txEth.wait();

const depositData = ethers.utils.defaultAbiCoder.encode(['uint256'], [amount]);
// console.log(depositData);
const tx2Eth = await goerliManagerContract.depositFor(address, contracts.goerli.krm.address, depositData, { gasLimit: "1000000" });
console.log(goerliExplorer + 'tx/' + tx2Eth.hash);
await tx2Eth.wait();


// 0x1DbE15fa2fC6EA344dbf506f352f31D91408d172
// GOERLI
// https://goerli.etherscan.io/address/0x1DbE15fa2fC6EA344dbf506f352f31D91408d172

// 0xCffe6Be9988EF7F81Dee03F34dF756494397f1Cf
// MUMBAI
// https://explorer-mumbai.maticvigil.com/address/0xCffe6Be9988EF7F81Dee03F34dF756494397f1Cf