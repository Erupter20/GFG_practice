import React from "react";
import { useContext } from "react";
import { dataDistributer } from "./App";
import Child2 from "./Child2";

const Child1 = () => {
  const data = useContext(dataDistributer);
  console.log(data);
  return Child2;
};

export default Child1;
