import React, { useState } from "react";
import cryptoContext from "./CryptoCotext";

function CryptoContextProvider({ children }) {
  const [data, setData] = React.useState();
  return (
    <div>
      <cryptoContext.Provider value={{ data, setData }}>
        {children}
      </cryptoContext.Provider>
    </div>
  );
}

export default CryptoContextProvider;
