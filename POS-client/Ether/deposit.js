const config = require('../config')
const utils = require('../utils')
const maticPOSClient = utils.getMaticPOSClient()


// DEPOSIT FROM ETHEREUM
const execute = async () => {
  try {
    const tx = await maticPOSClient.depositEtherForUser(config.user.address, config.user.amount, {
      from: config.user.address
    })

    console.log(`https://goerli.etherscan.io/tx/${tx.transactionHash}`)

  } catch (e) {
    console.error(e)
  }
}

execute().then(() => process.exit(0))
