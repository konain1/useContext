
import { Child } from "./Child"
import GrandChild from "./GrandChild"
import Appcontext from './context/Appcontext'
import { useState } from "react"



const App =() =>{

const [user,setUser] = useState("leo")

  return (
  
<>



    <h1>app</h1>
    <Appcontext.Provider  value={{user,setUser}}>
     <Child></Child>
    </Appcontext.Provider>
</>
     


  )
}

export default App
