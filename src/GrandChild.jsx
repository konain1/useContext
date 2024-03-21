import React, { useContext, useState } from "react";
import Appcontext from "./context/Appcontext";

function GrandChild() {

  const {setUser} = useContext(Appcontext);
 const [newuser,setNewUser] = useState("")
 


  function dataHandler() { // Corrected typo
    setNewUser('doora')
    setUser(newuser)
   
  }
  
  return (
    <>
      <h1>GrandChild: </h1>
      <button onClick={dataHandler}>Set Data</button>
    </>
  );
}

export default GrandChild