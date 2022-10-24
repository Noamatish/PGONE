import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import MainMint from "./MainMint";
// import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import "./main.css";

const providerOptions = {
  // CointBaseWallet: {
  //   package: CoinbaseWalletSDK,
  //   options: {
  //     appName: "Web3Modal Demo",
  //     infuraaId: { 3: "https://ropsten.infura.io/v3/fefnefnesfe" },
  //   },
  // },
};

function AppWeb3() {
  // const [provider, setProvider] = useState();
  // const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  // const [signature, setSignature] = useState("");
  // const [error, setError] = useState("");
  // const [chainId, setChainId] = useState();
  // const [network, setNetwork] = useState();
  // const [message, setMessage] = useState("");
  // const [signedMessage, setSignedMessage] = useState("");
  // const [verified, setVerified] = useState();

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      // setProvider(provider);
      // setLibrary(library);
      if (accounts) {
        setAccount(accounts[0]);
        console.log(accounts[0]);
      }
      // setChainId(network.chainId);
    } catch (error) {
      // setError(error);
    }
  };

  const isConnected = Boolean(account);
  if (!isConnected)
    return (
      <div className="App">
        <button onClick={connectWallet}>Connect Account ASAP</button>;
      </div>
    );
  else {
    return (
      <div className="App">
        <MainMint account={account} />
      </div>
    );
  }
}

export default AppWeb3;
