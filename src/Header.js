import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo-container header-section">
        <img className="main-logo" src="/assets/Logo.png" />
      </div>
      <div className="links-container header-section">
        <a href="" target="_blank">
          <img className="dc" src="/assets/dc.png" />
        </a>
        <a href="https://twitter.com/PageOne_Gallery" target="_blank">
          <img className="tw" src="/assets/tw.png" />
        </a>
        <a href="https://www.premint.xyz/page-one-gallery/" target="_blank">
          <img className="pt" src="/assets/Pt.png" />
        </a>
      </div>
    </div>
  );
}

export default Header;
