const connectWallet = document.getElementById("connectButton");

connectWallet.addEventListener("click", async function () {
  await connectingWallet();
  window.location.href = "http://localhost:3000/dashboard.html";
});

//------- connecting wallet

async function connectingWallet() {
  console.log(" connectinWallet function");
  window.ethereum.enable();
}
