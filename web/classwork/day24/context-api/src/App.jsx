import React from "react";
import Child1 from "./assets/Child1";
import { createContext } from "react";

export const dataDistributer = createContext();

const App = () => {
  let data = {
    fname: "harsh",
    lname: "boyal",
  };
  return (
    <dataDistributer.Provider value={data}>
      <div>
        <Child1 />
      </div>
    </dataDistributer.Provider>
  );
};

export default App;
