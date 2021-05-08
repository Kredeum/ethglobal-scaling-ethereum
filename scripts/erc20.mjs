import contracts from '../lib/contracts.mjs';
import hre from 'hardhat';
const { ethers } = hre;
const ethscan = hre.network.config.ethscan;

const address = process.env.ACCOUNT_ADDRESS;
const key = process.env.ACCOUNT_KEY;
const amount = ethers.BigNumber.from(10).pow(18).mul(42); // 42 


const goerliKRMContract = new ethers.Contract(contracts.goerli.krm.address, contracts.goerli.erc20.abi, goerliSigner);
console.log(goerliExplorer + 'address/' + contracts.goerli.krm.address);

const goerliManagerContract = new ethers.Contract(contracts.goerli.manager.address, contracts.goerli.manager.abi, goerliSigner);
console.log(goerliExplorer + 'address/' + contracts.goerli.manager.address);

const mumbaiKRMContract = new ethers.Contract(contracts.mumbai.krm.address, contracts.mumbai.erc20.abi, mumbaiSigner);
console.log(mumbaiExplorer + 'address/' + contracts.mumbai.krm.address);


const txEth = await goerliKRMContract.approve(contracts.goerli.erc20Predicate.address, amount, { gasLimit: "1000000" });
console.log(goerliExplorer + 'tx/' + txEth.hash);
await txEth.wait();

const depositData = ethers.utils.defaultAbiCoder.encode(['uint256'], [amount]);
const tx2Eth = await goerliManagerContract.depositFor(address, contracts.goerli.krm.address, depositData, { gasLimit: "1000000" });
console.log(goerliExplorer + 'tx/' + tx2Eth.hash);
await tx2Eth.wait();






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
