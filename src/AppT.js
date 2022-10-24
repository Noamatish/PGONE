import "./App.css";
import { useState } from "react";
import MainMint from "./MainMint";
import "./main.css";
import MainPage from "./MainPage";

function AppT() {
  const [account, setAccounts] = useState(false);
  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts[0]);
    }
  };
  const isConnected = Boolean(account);
  if (!isConnected)
    return (
      <div className="App">
        <button onClick={connectAccount}>Connect Account ASAP</button>;
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

export default AppT;
