const connectWallet = document.getElementById("getAccounts");
const message = document.getElementById("getAccountsResult");

connectWallet.addEventListener('click', async function(){
    await connectingWallet();
    const account = await getAccounts();
    const getAd = await getAdmin();
    if(account !== getAd){
        message.textContent = "YOU ARE NOT ADMIN !!"
    }
    else{
        window.location.href = "http://localhost:3000/dashboard.html";
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