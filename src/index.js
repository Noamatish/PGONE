import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppT from "./AppT";
import reportWebVitals from "./reportWebVitals";
import { Buffer } from "buffer";
import Header from "./Header";
import AppWeb3 from "./AppWeb3";

// @ts-ignore
window.Buffer = Buffer;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    {/* <AppT /> */}
    <AppWeb3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
