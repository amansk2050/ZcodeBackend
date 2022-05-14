var baseURL = "https://zcode.dog/";
const marketPlaceAddress = document.getElementById("marketPlace");
const nftAddress = document.getElementById("nft");
const contractBalance = document.getElementById("contractBalance");
const personalBalance = document.getElementById("personalBalance");
const myAddress = document.getElementById("myAddress");
const reload = document.getElementById("reload");
const reload2 = document.getElementById("reload2");
const withdrawFunds = document.getElementById("withdrawFunds");
document.addEventListener("DOMContentLoaded", async function () {
  await load();
  let account = await getAccounts();
  const getAd = await getAdmin();
  if (account.toLowerCase() !== getAd.toLowerCase()) {
    window.location.href = `${baseURL}admin.html`;
  } else {
    // changing my address
    myAddress.textContent = account;
    marketPlaceAddress.textContent = contractAddressMarket;
    nftAddress.textContent = NFTaddress;
    await AdminView();
    await FinancialsView(account);
  }
});
// market place address --
var contractAddressMarket = "0xF62679eA3cE6625D5e86B45A630245a142E7ACE7";
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

//nft contract
var NFTaddress = "0x4b93cb7545A01D5654f18eb13D85194a4d66F5e9";

// nft abi

var NFTAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_initBaseURI",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseExtension",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintActivate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minterAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
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
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [],
    name: "visibility",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newmaxMint",
        type: "uint256",
      },
    ],
    name: "setmaxMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minterAddress",
        type: "address",
      },
    ],
    name: "setMinterAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newDefaultBaseURI",
        type: "string",
      },
    ],
    name: "setDefaultBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isMint",
        type: "bool",
      },
    ],
    name: "setMintActivation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseExtension",
        type: "string",
      },
    ],
    name: "setBaseExtension",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_visibility",
        type: "bool",
      },
    ],
    name: "setVisibility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    contractAbiMarket,
    contractAddressMarket
  );
}

async function loadNFTContract() {
  console.log("get loadContract NFT");
  return await new window.web3.eth.Contract(NFTAbi, NFTaddress);
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
  window.contract2 = await loadNFTContract();
}

// getting admin address --

async function getAdmin() {
  const admin = await contract.methods.superOwner().call();
  return admin;
}

async function AdminView() {
  const maxSupply = document.getElementById("maxSupply");
  const maxMint = document.getElementById("maxMint");
  const totalMinted = document.getElementById("totalMinted");
  const visibility = document.getElementById("visibility");
  const totalCategories = document.getElementById("totalCategories");
  const totalGoldminted = document.getElementById("totalGoldminted");
  const totalPlatinumminted = document.getElementById("totalPlatinumminted");
  const totalLegendaryminted = document.getElementById("totalLegendaryminted");
  let stage = document.getElementById("stage");
  let minting = document.getElementById("minting");
  //-- mutating the values ...
  totalCategories.textContent = await contract.methods
    .TOTAL_CATEGORIES()
    .call();

  let golds = await contract.methods.tokenCategories(0).call();
  totalGoldminted.textContent = golds.totalMinted;

  let platinum = await contract.methods.tokenCategories(1).call();
  totalPlatinumminted.textContent = platinum.totalMinted;

  let legendary = await contract.methods.tokenCategories(2).call();
  totalLegendaryminted.textContent = legendary.totalMinted;

  let stageValue = await contract.methods.stage().call();
  if (Number(stageValue) == 0) {
    stage.textContent = "PRESALE";
  } else {
    stage.textContent = "POSTSALE";
  }

  // call from nft contract

  maxSupply.textContent = await contract2.methods.maxSupply().call();
  maxMint.textContent = await contract2.methods.maxMint().call();
  totalMinted.textContent = await contract2.methods.totalMinted().call();
  visibility.textContent = await contract2.methods.visibility().call();
  let mintingStatus = await contract2.methods.mintActivate().call();
  if (mintingStatus) {
    minting.textContent = "ON";
  } else {
    minting.textContent = "OFF";
  }
  // onload function and set those values.
  /**
   * 1. max supply
   * 2. max mint
   * 3. total minted.
   * 4. visibility.
   * 5. total catagories.
   * 6. Total gold minted.
   * 7. total platinum minted.
   * 8. total legendary minted.
   */
}
reload.addEventListener("click", async function () {
  console.log("reloading...");
  await AdminView();
});
reload2.addEventListener("click", async function () {
  console.log("reloading footer...");
  let account = await getAccounts();
  await FinancialsView(account);
});

//---

async function showCurrentPrice() {
  let data = document.getElementById("currentPrice").value;
  let ans = document.getElementById("ans");
  let base = 1000000000000000000;
  console.log("data :: ", data);
  if (Number(data) > 3) {
    ans.textContent = "wrong input";
  } else {
    let price = await contract.methods.currentPrice(Number(data)).call();
    let modPrice = Number(price) / base;
    ans.textContent = `${modPrice} ETH`;
  }
}

async function showAvailableToken() {
  let data = document.getElementById("availableToken").value;
  let ans = document.getElementById("ans1");
  console.log("data :: ", data);
  if (Number(data) >= 3) {
    ans.textContent = "wrong input";
  } else {
    let availableToken = await contract.methods
      .availableTokens(Number(data))
      .call();
    ans.textContent = `${availableToken} NFT`;
  }
}

async function showOwnersAvailableToken() {
  let data = document.getElementById("ownersToken").value;
  let ans = document.getElementById("ans2");
  console.log("data :: ", data);
  if (Number(data) >= 3) {
    ans.textContent = "wrong input";
  } else {
    let availableToken = await contract.methods
      .availableTokensForOwner(Number(data))
      .call();
    ans.textContent = `${availableToken} NFT`;
  }
}

//--- admit set --

async function setMaxMint() {
  let data = document.getElementById("setmaxMint").value;
  console.log("data :: ", data);
  let popText = document.getElementById("popText1");
  popText.classList.remove("display__none");
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let transaction = await contract2.methods.setmaxMint(data).send(params);
  console.log("transaction :: ", transaction);
  popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
  popText.textContent = "Transaction";
}

async function setDefaultBaseUri() {
  let data = document.getElementById("defaultBaseUri").value;
  console.log("data :: ", data);
  let popText = document.getElementById("popText2");
  popText.classList.remove("display__none");
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let transaction = await contract2.methods
    .setDefaultBaseUri(data)
    .send(params);
  console.log("transaction :: ", transaction);
  popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
  popText.textContent = "Transaction";
}

async function updateStage() {
  let popText = document.getElementById("popText3");
  popText.classList.remove("display__none");
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let transaction = await contract.methods.updateStage().send(params);
  console.log("transaction :: ", transaction);
  let stage = document.getElementById("stage");
  let stageValue = await contract.methods.stage().call();
  if (Number(stageValue) == 0) {
    stage.textContent = "PRESALE";
  } else {
    stage.textContent = "POSTSALE";
  }
  popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
  popText.textContent = "Transaction";
}

async function setVisibility() {
  let data = document.getElementById("visibility").value;
  console.log("data :: ", data);
  let popText = document.getElementById("popText4");
  popText.classList.remove("display__none");
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let transaction = await contract.methods.setVisibility(data).send(params);
  console.log("transaction :: ", transaction);
  popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
  popText.textContent = "Transaction";
}

//-- admin Perform
async function updateMinting() {
  let popText = document.getElementById("popTextMint");
  popText.classList.remove("display__none");
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let val = await checkMinting();
  let val1 = !val;
  console.log("val1 :: ", val1);
  let transaction = await contract2.methods
    .setMintActivation(val1)
    .send(params);
  console.log("transaction :: ", transaction);
  let val2 = await checkMinting();
  console.log("val2 :: ", val2);
  popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
  popText.textContent = "Transaction";
}

async function whitelist() {
  let data = document.getElementById("whitelist").value;
  const arr = data.split(",");
  console.log("data :: ", arr);
  let popText = document.getElementById("popTextWhitelist");
  popText.classList.remove("display__none");
  if(arr[arr.length -1].length == 0) {
    popText.textContent = "Remove comma at the end ";
  }
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let transaction = await contract.methods
  .whitelist(arr)
  .send(params);
console.log("transaction :: ", transaction);
popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
popText.textContent = "Transaction";
}

async function blacklist() {
  let data = document.getElementById("blacklist").value;
  const arr = data.split(",");
  console.log("data :: ", arr);
  let popText = document.getElementById("popTextBlacklist");
  popText.classList.remove("display__none");
  if(arr[arr.length -1].length == 0) {
    popText.textContent = "Remove comma at the end ";
  }
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let transaction = await contract.methods
  .blacklist(arr)
  .send(params);
console.log("transaction :: ", transaction);
popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
popText.textContent = "Transaction";
}
// -- Financials --

async function FinancialsView(account) {
  let Personalbalance = await window.web3.eth.getBalance(account);
  let ethPersonalBalance = await window.web3.utils.fromWei(
    Personalbalance,
    "ether"
  );
  console.log("eth :: ", ethPersonalBalance);
  personalBalance.textContent = `${ethPersonalBalance} ETH`;
  let Contractbalance = await window.web3.eth.getBalance(contractAddressMarket);
  let ethContractBalance = await window.web3.utils.fromWei(
    Contractbalance,
    "ether"
  );
  console.log("eth :: ", ethContractBalance);
  contractBalance.textContent = `${ethContractBalance} ETH`;
}

withdrawFunds.addEventListener("click", async function () {
  let popText = document.getElementById("popText5");
  popText.classList.remove("display__none");
  let account = await getAccounts();
  let params = {
    from: account,
  };
  let transaction = await contract.methods.withdraw().send(params);
  console.log("transaction :: ", transaction);
  popText.href = `https://rinkeby.etherscan.io/tx/${transaction.transactionHash}`;
  popText.textContent = "Transaction";
});

//-- logout --

async function logout() {
  if (!window.ethereum.isConnected()) {
    console.log("Disconnected");
  } else {
    console.log("Connected");
  }
}

async function checkMinting() {
  let minting = document.getElementById("minting");
  let mintingStatus = await contract2.methods.mintActivate().call();
  if (mintingStatus) {
    minting.textContent = "ON";
  } else {
    minting.textContent = "OFF";
  }
  return mintingStatus;
}
