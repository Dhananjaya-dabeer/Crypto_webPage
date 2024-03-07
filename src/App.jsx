import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import KoinxPage from "./page/KoinxPage";
import CryptoContextProvider from "./context/CryptoContextProvider";

function App() {
  return (
    <CryptoContextProvider>
      <KoinxPage />
    </CryptoContextProvider>
  );
}

export default App;
