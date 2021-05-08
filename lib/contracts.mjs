const contracts = {
  goerli: {
    erc20Predicate: {
      address: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34'
    },
    manager: {
      address: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74'
    },
    erc20: {
      address: '0x655F2166b0709cd575202630952D71E2bB0d61Af'
    },
    krm: {
      address: '0x1DbE15fa2fC6EA344dbf506f352f31D91408d172'
    }
  },
  mumbai: {
    WETH: {
      address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa'
    },
    krm: {
      address: '0xCffe6Be9988EF7F81Dee03F34dF756494397f1Cf'
    }
  }
};


contracts.goerli.manager.abi = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'bytes32',
    name: 'tokenType',
    type: 'bytes32'
  },
  {
    indexed: true,
    internalType: 'address',
    name: 'predicateAddress',
    type: 'address'
  }
  ],
  name: 'PredicateRegistered',
  type: 'event'
},
{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'rootToken',
    type: 'address'
  },
  {
    indexed: true,
    internalType: 'address',
    name: 'childToken',
    type: 'address'
  },
  {
    indexed: true,
    internalType: 'bytes32',
    name: 'tokenType',
    type: 'bytes32'
  }
  ],
  name: 'TokenMapped',
  type: 'event'
},
{
  inputs: [{
    internalType: 'bytes32',
    name: 'tokenType',
    type: 'bytes32'
  },
  {
    internalType: 'address',
    name: 'predicateAddress',
    type: 'address'
  }
  ],
  name: 'registerPredicate',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
},
{
  inputs: [{
    internalType: 'address',
    name: 'rootToken',
    type: 'address'
  },
  {
    internalType: 'address',
    name: 'childToken',
    type: 'address'
  },
  {
    internalType: 'bytes32',
    name: 'tokenType',
    type: 'bytes32'
  }
  ],
  name: 'mapToken',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
},
{
  inputs: [{
    internalType: 'address',
    name: 'user',
    type: 'address'
  }],
  name: 'depositEtherFor',
  outputs: [],
  stateMutability: 'payable',
  type: 'function'
},
{
  inputs: [{
    internalType: 'address',
    name: 'user',
    type: 'address'
  },
  {
    internalType: 'address',
    name: 'rootToken',
    type: 'address'
  },
  {
    internalType: 'bytes',
    name: 'depositData',
    type: 'bytes'
  }
  ],
  name: 'depositFor',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
},
{
  inputs: [{
    internalType: 'bytes',
    name: 'inputData',
    type: 'bytes'
  }],
  name: 'exit',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}
];

contracts.goerli.erc20.abi = [{
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "addedValue",
    "type": "uint256"
  }],
  "name": "increaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "mint",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "addMinter",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceMinter",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "subtractedValue",
    "type": "uint256"
  }],
  "name": "decreaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "isMinter",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "_name",
    "type": "string"
  }, {
    "internalType": "string",
    "name": "_symbol",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "MinterAdded",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "MinterRemoved",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}];


contracts.mumbai.WETH.abi = [{
  type: 'constructor',
  stateMutability: 'nonpayable',
  inputs: []
},
{
  type: 'event',
  name: 'Approval',
  inputs: [{
    type: 'address',
    name: 'owner',
    internalType: 'address',
    indexed: true
  },
  {
    type: 'address',
    name: 'spender',
    internalType: 'address',
    indexed: true
  },
  {
    type: 'uint256',
    name: 'value',
    internalType: 'uint256',
    indexed: false
  }
  ],
  anonymous: false
},
{
  type: 'event',
  name: 'MetaTransactionExecuted',
  inputs: [{
    type: 'address',
    name: 'userAddress',
    internalType: 'address',
    indexed: false
  },
  {
    type: 'address',
    name: 'relayerAddress',
    internalType: 'address payable',
    indexed: false
  },
  {
    type: 'bytes',
    name: 'functionSignature',
    internalType: 'bytes',
    indexed: false
  }
  ],
  anonymous: false
},
{
  type: 'event',
  name: 'RoleAdminChanged',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32',
    indexed: true
  },
  {
    type: 'bytes32',
    name: 'previousAdminRole',
    internalType: 'bytes32',
    indexed: true
  },
  {
    type: 'bytes32',
    name: 'newAdminRole',
    internalType: 'bytes32',
    indexed: true
  }
  ],
  anonymous: false
},
{
  type: 'event',
  name: 'RoleGranted',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32',
    indexed: true
  },
  {
    type: 'address',
    name: 'account',
    internalType: 'address',
    indexed: true
  },
  {
    type: 'address',
    name: 'sender',
    internalType: 'address',
    indexed: true
  }
  ],
  anonymous: false
},
{
  type: 'event',
  name: 'RoleRevoked',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32',
    indexed: true
  },
  {
    type: 'address',
    name: 'account',
    internalType: 'address',
    indexed: true
  },
  {
    type: 'address',
    name: 'sender',
    internalType: 'address',
    indexed: true
  }
  ],
  anonymous: false
},
{
  type: 'event',
  name: 'Transfer',
  inputs: [{
    type: 'address',
    name: 'from',
    internalType: 'address',
    indexed: true
  },
  {
    type: 'address',
    name: 'to',
    internalType: 'address',
    indexed: true
  },
  {
    type: 'uint256',
    name: 'value',
    internalType: 'uint256',
    indexed: false
  }
  ],
  anonymous: false
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint256',
    name: '',
    internalType: 'uint256'
  }],
  name: 'CHILD_CHAIN_ID',
  inputs: []
}, {
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'bytes',
    name: '',
    internalType: 'bytes'
  }],
  name: 'CHILD_CHAIN_ID_BYTES',
  inputs: []
}, {
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'bytes32',
    name: '',
    internalType: 'bytes32'
  }],
  name: 'DEFAULT_ADMIN_ROLE',
  inputs: []
}, {
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'bytes32',
    name: '',
    internalType: 'bytes32'
  }],
  name: 'DEPOSITOR_ROLE',
  inputs: []
}, {
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'string',
    name: '',
    internalType: 'string'
  }],
  name: 'ERC712_VERSION',
  inputs: []
}, {
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint256',
    name: '',
    internalType: 'uint256'
  }],
  name: 'ROOT_CHAIN_ID',
  inputs: []
}, {
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'bytes',
    name: '',
    internalType: 'bytes'
  }],
  name: 'ROOT_CHAIN_ID_BYTES',
  inputs: []
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint256',
    name: '',
    internalType: 'uint256'
  }],
  name: 'allowance',
  inputs: [{
    type: 'address',
    name: 'owner',
    internalType: 'address'
  },
  {
    type: 'address',
    name: 'spender',
    internalType: 'address'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [{
    type: 'bool',
    name: '',
    internalType: 'bool'
  }],
  name: 'approve',
  inputs: [{
    type: 'address',
    name: 'spender',
    internalType: 'address'
  },
  {
    type: 'uint256',
    name: 'amount',
    internalType: 'uint256'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint256',
    name: '',
    internalType: 'uint256'
  }],
  name: 'balanceOf',
  inputs: [{
    type: 'address',
    name: 'account',
    internalType: 'address'
  }]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [],
  name: 'changeName',
  inputs: [{
    type: 'string',
    name: 'name_',
    internalType: 'string'
  }]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint8',
    name: '',
    internalType: 'uint8'
  }],
  name: 'decimals',
  inputs: []
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [{
    type: 'bool',
    name: '',
    internalType: 'bool'
  }],
  name: 'decreaseAllowance',
  inputs: [{
    type: 'address',
    name: 'spender',
    internalType: 'address'
  },
  {
    type: 'uint256',
    name: 'subtractedValue',
    internalType: 'uint256'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [],
  name: 'deposit',
  inputs: [{
    type: 'address',
    name: 'user',
    internalType: 'address'
  },
  {
    type: 'bytes',
    name: 'depositData',
    internalType: 'bytes'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'payable',
  outputs: [{
    type: 'bytes',
    name: '',
    internalType: 'bytes'
  }],
  name: 'executeMetaTransaction',
  inputs: [{
    type: 'address',
    name: 'userAddress',
    internalType: 'address'
  },
  {
    type: 'bytes',
    name: 'functionSignature',
    internalType: 'bytes'
  },
  {
    type: 'bytes32',
    name: 'sigR',
    internalType: 'bytes32'
  },
  {
    type: 'bytes32',
    name: 'sigS',
    internalType: 'bytes32'
  },
  {
    type: 'uint8',
    name: 'sigV',
    internalType: 'uint8'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'pure',
  outputs: [{
    type: 'uint256',
    name: '',
    internalType: 'uint256'
  }],
  name: 'getChainId',
  inputs: []
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'bytes32',
    name: '',
    internalType: 'bytes32'
  }],
  name: 'getDomainSeperator',
  inputs: []
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint256',
    name: 'nonce',
    internalType: 'uint256'
  }],
  name: 'getNonce',
  inputs: [{
    type: 'address',
    name: 'user',
    internalType: 'address'
  }]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'bytes32',
    name: '',
    internalType: 'bytes32'
  }],
  name: 'getRoleAdmin',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32'
  }]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'address',
    name: '',
    internalType: 'address'
  }],
  name: 'getRoleMember',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32'
  },
  {
    type: 'uint256',
    name: 'index',
    internalType: 'uint256'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint256',
    name: '',
    internalType: 'uint256'
  }],
  name: 'getRoleMemberCount',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32'
  }]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [],
  name: 'grantRole',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32'
  },
  {
    type: 'address',
    name: 'account',
    internalType: 'address'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'bool',
    name: '',
    internalType: 'bool'
  }],
  name: 'hasRole',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32'
  },
  {
    type: 'address',
    name: 'account',
    internalType: 'address'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [{
    type: 'bool',
    name: '',
    internalType: 'bool'
  }],
  name: 'increaseAllowance',
  inputs: [{
    type: 'address',
    name: 'spender',
    internalType: 'address'
  },
  {
    type: 'uint256',
    name: 'addedValue',
    internalType: 'uint256'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [],
  name: 'initialize',
  inputs: [{
    type: 'string',
    name: 'name_',
    internalType: 'string'
  },
  {
    type: 'string',
    name: 'symbol_',
    internalType: 'string'
  },
  {
    type: 'uint8',
    name: 'decimals_',
    internalType: 'uint8'
  },
  {
    type: 'address',
    name: 'childChainManager',
    internalType: 'address'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'string',
    name: '',
    internalType: 'string'
  }],
  name: 'name',
  inputs: []
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [],
  name: 'renounceRole',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32'
  },
  {
    type: 'address',
    name: 'account',
    internalType: 'address'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [],
  name: 'revokeRole',
  inputs: [{
    type: 'bytes32',
    name: 'role',
    internalType: 'bytes32'
  },
  {
    type: 'address',
    name: 'account',
    internalType: 'address'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'string',
    name: '',
    internalType: 'string'
  }],
  name: 'symbol',
  inputs: []
},
{
  type: 'function',
  stateMutability: 'view',
  outputs: [{
    type: 'uint256',
    name: '',
    internalType: 'uint256'
  }],
  name: 'totalSupply',
  inputs: []
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [{
    type: 'bool',
    name: '',
    internalType: 'bool'
  }],
  name: 'transfer',
  inputs: [{
    type: 'address',
    name: 'recipient',
    internalType: 'address'
  },
  {
    type: 'uint256',
    name: 'amount',
    internalType: 'uint256'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [{
    type: 'bool',
    name: '',
    internalType: 'bool'
  }],
  name: 'transferFrom',
  inputs: [{
    type: 'address',
    name: 'sender',
    internalType: 'address'
  },
  {
    type: 'address',
    name: 'recipient',
    internalType: 'address'
  },
  {
    type: 'uint256',
    name: 'amount',
    internalType: 'uint256'
  }
  ]
},
{
  type: 'function',
  stateMutability: 'nonpayable',
  outputs: [],
  name: 'withdraw',
  inputs: [{
    type: 'uint256',
    name: 'amount',
    internalType: 'uint256'
  }]
}
];

export default contracts;