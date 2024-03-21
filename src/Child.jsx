import React, { useContext, useState } from "react";
import GrandChild from "./GrandChild.jsx";
import Appcontext from "./context/Appcontext.js";
export function Child() {

    const userContext = useContext(Appcontext)
    const [username,setUsername] = useState(userContext.user)
  return (
    <>
      <h1>Child 1: {username}</h1>
      <GrandChild />
    </>
  );
}
