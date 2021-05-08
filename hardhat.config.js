require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {
      loggingEnabled: true,
      forking: {
        url: `https://eth-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
        // blockNumber: 23569930
      },
      accounts: [
        { privateKey: process.env.ACCOUNT_KEY, balance: '100000000000000000000' },
      ]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.ACCOUNT_KEY],
      ethscan: 'https://mainnet.etherscan.io'
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.ACCOUNT_KEY],
      ethscan: 'https://goerli.etherscan.io'
    },
    matic: {
      url: `https://rpc-mainnet.maticvigil.com/v1/${process.env.MATICVIGIL_API_KEY}`,
      chainId: 137,
      accounts: [process.env.ACCOUNT_KEY],
      ethscan: 'https://explorer-mainnet.maticvigil.com'
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_API_KEY}`,
      chainId: 80001,
      accounts: [process.env.ACCOUNT_KEY],
      ethscan: 'https://explorer-mumbai.maticvigil.com'
    }
  },
  solidity: "0.8.3",
};
