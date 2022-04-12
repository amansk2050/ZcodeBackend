const ethereumButton = document.getElementById("connectButton");

// --eventListner for connecting wallet --
ethereumButton.addEventListener("click", async () => {
  console.log("connecting wallet");
  await connectingWallet();
  ethereumButton.textContent = "Connected";
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

var baseURL = "http://localhost:3000/";
// --- function to connecting wallet ---

async function connectingWallet() {
  console.log(" connectinWallet function");
  window.ethereum.enable();
}

// funtion to load contract

async function loadContract() {
  console.log("get loadContract function");
  return await new window.web3.eth.Contract(
    contractAbiMarket,
    contractAddressMarket
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
load();
//  calling load to load contract at window

//-----for initialising on load functions ----

document.addEventListener("DOMContentLoaded", async function () {
  console.log("dom load");
  await getCatagoryPrice();
});

//---get nft price  ---
async function getCatagoryPrice() {
  var price = [];
  var base = 1000000000000000000;
  console.log("get getCatagoryPrice function");
  for (i = 0; i < 3; i++) {
    const cost = await contract.methods.currentPrice(i).call();
    price.push(cost / base);
  }
  var goldPrice = document.getElementById("gold-price");
  var platinumPrice = document.getElementById("platinum-price");
  var legendaryPrice = document.getElementById("legendary-price");

  goldPrice.textContent = price[0];
  platinumPrice.textContent = price[1];
  legendaryPrice.textContent = price[2];
  console.log("price >>", price);
  console.log("change done");
}
//--- get account function --

async function getAccounts() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  console.log("account : ", account);
}

// -- buy nft---
async function buyNFT() {
  console.log("inside buy nft");

  //-- set code---
  let link = window.location.href;

  const affiliateCode = link.substring(link.indexOf("#") + 2);
  if (affiliateCode.length != 0 && link.indexOf("#") > 0) {
    console.log("affiliateCode :: ", affiliateCode);
    await setCookie("affiliateCode", affiliateCode, 30);
  }
  //----
  var a = document.getElementById("radio1");
  var b = document.getElementById("radio2");
  var c = document.getElementById("radio3");
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  let code = await getCookie("affiliateCode");
  console.log("affiliateCode gold code :: ", code);
  let extractCode = await extract(code);
  if (!extractCode) {
    extractCode = 0;
  }
  console.log("extractCode gold code :: ", extractCode);
  if (a.checked == false && b.checked == false && c.checked == false) {
    alert("First select any of the NFT type");
    return false;
  }
  if (a.checked == true) {
    console.log("You are buying Gold NFT");
    // await buyGold(account, extractCode);
    console.log("Gold minted ");
  } else if (b.checked == true) {
    console.log("You are buying Platinum NFT");
    await buyPlatinum(account, extractCode);
    console.log("Platinum minted ");
  } else {
    console.log("Your are buying Legendary NFT");
    await buyLegendary(account, extractCode);
    console.log("Legendary minted ");
  }
  let addr_ = await fundsTransfer(extractCode);
  await incrementAffiliateCount(addr_);
}

//--- buy for gold --
async function buyGold(account, code) {
  console.log("buy gold code :: ", code);
  let counter = document.getElementById("count").textContent;
  console.log("conuter : ", counter);
  let precision = 1000000000000000000;
  var goldPrice = document.getElementById("gold-price").textContent;
  console.log("goldPrice : ", goldPrice);
  let val = goldPrice * precision * Number(counter);
  console.log("vaule :: ", val);
  let params = {
    from: account,
    value: `${val}`,
  };
  const transaction = await contract.methods
    .buyToken(0, counter, code)
    .send(params);
  console.log("transaction :: ", transaction);
}

//--- buy for platinum --

async function buyPlatinum(account, code) {
  let counter = document.getElementById("count").textContent;
  console.log("conuter : ", counter);
  let precision = 1000000000000000000;
  var platinumPrice = document.getElementById("platinum-price").textContent;
  console.log("platinumPrice : ", platinumPrice);
  let val = platinumPrice * precision * Number(counter);
  console.log("vaule :: ", val);
  let params = {
    from: account,
    value: val,
  };
  let transaction = await contract.methods
    .buyToken(1, counter, code)
    .send(params);
  console.log("transaction :: ", transaction);
}

//--- buy for legendary --

async function buyLegendary(account, code) {
  let counter = document.getElementById("count").textContent;
  console.log("conuter : ", counter);
  let precision = 1000000000000000000;
  var legendaryPrice = document.getElementById("legendary-price").textContent;
  console.log("legendaryPrice : ", legendaryPrice);
  let val = legendaryPrice * precision * Number(counter);
  console.log("vaule :: ", val);
  let params = {
    from: account,
    value: val,
  };
  let transaction = await contract.methods
    .buyToken(2, counter, code)
    .send(params);
  console.log("transaction :: ", transaction);
}

//-- get address --

async function fundsTransfer(code) {
  console.log("inside funds transfer");
  console.log("funds params :: ", code);
  const params = {
    code: `${code}`,
  };
  const res = await axios.get(`${baseURL}getdata`, { params });
  let address = res.data.address;

  console.log("inside fundsa transfer :: ", address, " ---  ", code);

  await sendTxn(code, address);

  //---
  return address;
}

//---set cookiee --

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//-- get cookiee --
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//--- affiliate count increment --
async function incrementAffiliateCount(addr) {
  const params = {
    address: addr,
  };
  const res = await axios.post(`${baseURL}countIncrement`, params);
}

//---send private transaction ---
async function sendTxn(code, address) {
  console.log("inside sendTxn ");
  const functCall = await contract.methods
    .giveBenefit(code, address)
    .encodeABI();
  const receipt = await transact(functCall, 0, contractAddressMarket);
  console.log(receipt);
}

//--  transact ---
const transact = async (data, value, contractAddress) => {
 
  console.log("inside transact ");
  let privateKey = new ethereumjs.Buffer.Buffer('7afbc5ed31d26a2ae94f70f5915c035538d715f7a25e05f696ed4a89a78d9788', 'hex')

  const publicKey = "0xb1551B2b46df680E8e25E97232888a26ecdc01F5";
  var count = await web3.eth.getTransactionCount(publicKey);
  var gasPrice = await web3.eth.getGasPrice();
  console.log("GP :: ", gasPrice);
  var txData = {
    nonce: count,
    gasLimit: 1500000,
    gasPrice: 150000000000,
    to: contractAddress,
    from: publicKey,
    data: data,
    value: value,
  };
  var transaction = new ethereumjs.Tx(txData, {
    chain: "rinkeby",
    hardfork: "petersburg",
  });
  const signedTxn = transaction.sign(privateKey);
  console.log(transaction.hash(true).toString("hex"), "previous");
  var serialisedTransaction = transaction.serialize().toString("hex");
  var receipt = await web3.eth.sendSignedTransaction(
    "0x" + serialisedTransaction
  );
  console.log(receipt, "original");
  return receipt;
};

//-- function extract code --

async function extract(code) {
  console.log("EST :: ", code);

  if (code.length == 0) {
    return 0;
  }
  let finalCode = code.substring(0, code.length - 5);
  console.log("extra final :: ", finalCode);
  return finalCode;
}
