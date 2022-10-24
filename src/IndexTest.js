import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { useMoralis, MoralisProvider } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId={process.env.REACT_APP_PUBLIC_APP_ID}
      serverUrl={process.env.REACT_APP_PUBLIC_SERVER_URL}
    >
      <Router>
        <Switch>
          <Route path="/dashboard">
            <App />
          </Route>
          <Route path="/">
            <Root />
          </Route>
        </Switch>
      </Router>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
