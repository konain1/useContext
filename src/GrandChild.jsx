import React, { useContext } from "react";

export function GrandChild() {

  const { setUser } = useContext(UserContext);

  function dataHandler() { // Corrected typo
    setUser('hello world');
  }

  return (
    <>
      <h1>GrandChild: {user}</h1>
      <button onClick={dataHandler}>Set Data</button>
    </>
  );
}
