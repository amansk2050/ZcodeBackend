const connectWallet = document.getElementById("connectButton");
const message = document.getElementById("getAccountsResult");
var baseURL = "https://zcode.dog/";
const contractDetails = {
  contractAddressMarket: "0x53F42dF2948f8cBB1E07214c66fcFc631A1fDB29",
  contractAbiMarket: [
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
        {
          internalType: "address",
          name: "_superOwner",
          type: "address",
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
  ],
};
connectWallet.addEventListener("click", async function () {
  console.log("First :: ");
  // await connectingWallet();
  const account = await getAccounts();
  console.log("account :: ", account);
  const getAd = await getAdmin();
  console.log("admin address :: ", getAd);
  if (account.toLowerCase() === getAd.toLowerCase()) {
    window.location.href = `${baseURL}dashboard.html`;
  } else {
    message.textContent = "YOU ARE NOT ADMIN !!";
  }
});
document.addEventListener("DOMContentLoaded", async function () {
  await load();
});

//------- connecting wallet

async function connectingWallet() {
  console.log(" connectinWallet function");
  window.ethereum.enable();
}

//--- get account function --

async function getAccounts() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
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
