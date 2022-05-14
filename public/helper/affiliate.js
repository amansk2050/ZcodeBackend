var baseURL = "https://zcode.dog/";
const connectWallet = document.getElementById("connect__wallet");

//-- if connected ---

document.addEventListener("DOMContentLoaded", async function () {
  connectWallet.textContent = "Generate Link";
  var placeholder = document.getElementById("myText1");
  placeholder.placeholder = await getAccounts();
  let link = window.location.href;

  const affiliateCode = link.substring(link.indexOf("#") + 2);
  if (affiliateCode.length != 0 && link.indexOf("#") > 0) {
    console.log("affiliateCode :: ", affiliateCode);
    await setCookie("affiliateCode", affiliateCode, 30);
  }
});

// --eventListner for connecting wallet --
async function getAffiliate() {
  if (connectWallet.textContent.includes("Connect Wallet")) {
    await connectingWallet();
    console.log("after connecting wallet");
    connectWallet.textContent = "Generate Link";
  } else if (connectWallet.textContent.includes("Generate Link")) {
    const account = await getAccounts();
    await getRefferalLink(account);
  } else {
    console.log("no");
    await copyLink();
  }
}

//------- connecting wallet

async function connectingWallet() {
  console.log(" connectinWallet function");
  window.ethereum.enable();
}

//--- get account function --

async function getAccounts() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  console.log("account : ", account);
  return account;
}

// //-------callig api to get/generate link ---

async function getRefferalLink(account) {
  console.log("inside referreal link");
  const params = {
    address: account,
  };

  const res = await axios.post(`${baseURL}generate`, params);
  let link = `https://zcode.dog/#/${res.data.code}`;
  console.log("link :: ", link);
  //-- replace input text value
  var placeholder = document.getElementById("myText1");
  placeholder.placeholder = link;
  //-- change button to copy link--
  connectWallet.textContent = "Copy Link";
}

//------copy link

async function copyLink() {
  console.log("inside copy link");
  var copyText = document.getElementById("myText1");
  console.log("copytext :: ", copyText);
  copyText.select();
  navigator.clipboard.writeText(copyText.placeholder);
}

//---
async function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
