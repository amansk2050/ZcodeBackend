document.addEventListener("DOMContentLoaded", async function () {
  await load();
  const account = await getAccounts();
  const getAd = await getAdmin()
  if(account !== getAd){
  window.location.href = "http://localhost:3000/admin.html";
  }
  else {
    // onload function and set those values.
    /**
     * 1. set admin address 
     * 2. set contract address.
     * 3. set max mint.
     * 4. set Total minted.
     * 5. set visibillity 
     * 6. set total catagories.
     * 7. set total gold minted.
     * 8. set total platinum minted.
     * 9. set total legendary minted.
     * 
     */
  }
});
// market place address --
var contractAddressMarket = "0x233333E977bC6bA51133De901630aef4a4E25710";
// market place abi ---

var contractAbiMarket = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_babyDogeNFT",
        type: "address",
      },
      {
        internalType: "uint256[3]",
        name: "_prices",
        type: "uint256[3]",
      },
      {
        internalType: "uint256[3]",
        name: "_total",
        type: "uint256[3]",
      },
      {
        internalType: "uint256[3]",
        name: "_totalForPresale",
        type: "uint256[3]",
      },
      {
        internalType: "uint256[3]",
        name: "_totalForOwner",
        type: "uint256[3]",
      },
      {
        internalType: "uint256[3][3]",
        name: "_random",
        type: "uint256[3][3]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestedTokenCategory",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "givenTokenCategory",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boughtAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stage",
        type: "uint256",
      },
    ],
    name: "buy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenCategory",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boughtAt",
        type: "uint256",
      },
    ],
    name: "buyForOwner",
    type: "event",
  },
  {
    inputs: [],
    name: "TOTAL_CATEGORIES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "babyDogeNFT",
    outputs: [
      {
        internalType: "contract BabyDogeNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "codesDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCollected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalGiven",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "randomAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "superOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenCategories",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalForPresale",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalForOwner",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalMinted",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalMintedForOwner",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextTokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenCategory",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalUnits",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_code",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [],
    name: "updateStage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "_prices",
        type: "uint256[3]",
      },
    ],
    name: "updatePrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_userAddress",
        type: "address[]",
      },
    ],
    name: "whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_code",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "giveBenefit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_userAddress",
        type: "address[]",
      },
    ],
    name: "blacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newSuperOwner",
        type: "address",
      },
    ],
    name: "changeSuperOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenCategory",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalUnits",
        type: "uint256",
      },
    ],
    name: "buyTokenForOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_category",
        type: "uint256",
      },
    ],
    name: "currentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_category",
        type: "uint256",
      },
    ],
    name: "availableTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_category",
        type: "uint256",
      },
    ],
    name: "availableTokensForOwner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_code",
        type: "uint256",
      },
    ],
    name: "beneftiDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
//--- get account function --
  
async function getAccounts() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  console.log("account : ", account);
  return account;
}

// - contract 


async function loadContract() {
  console.log("get loadContract function");
  return await new window.web3.eth.Contract(
      contractDetails.contractAbiMarket,
      contractDetails.contractAddressMarket
  );
}

//-----code for load function ---

async function load() {
  console.log("get load function");
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
  } else {
    console.log("no web3");
  }
  window.contract = await loadContract();
}

// getting admin address --

async function getAdmin() {
  const admin = await contract.methods.superOwner().call();
  return admin;
}