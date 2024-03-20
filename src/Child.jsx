import React, { useContext } from "react";
import GrandChild from "./GrandChild.jsx";

export function Child() {

  return (
    <>
      <h1>Child 1: </h1>
      <GrandChild />
    </>
  );
}
