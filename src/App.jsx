
import { createContext,useState } from "react"
import { Child } from "./Child"

export const userCont = createContext()

function App() {

  const [user,setUser] = useState('doora')

  return (
    <>
     <userCont.Provider value={user}>

     
     <h1>app</h1>
     <Child></Child>

     
     </userCont.Provider>
    </>
  )
}

export default App
