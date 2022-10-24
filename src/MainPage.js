import React from "react";
import CoolButton from "./CoolButton";
// import ModalWeb3 from "./ModalWeb3";
import TextAnimation from "./TextAnimation";

function MainPage({ isMintLive = false, mint }) {
  return (
    <div className="main-page">
      <h1>
        Page One. <br />{" "}
        <span>
          {isMintLive ? "Mint is Live!" : "Mint will be live soon..."}
        </span>
      </h1>
      {/* <button className="second-mint-button">Mint</button> */}
      <TextAnimation />
      <CoolButton mint={mint} />
      {/* <ModalWeb3 /> */}
    </div>
  );
}

export default MainPage;
