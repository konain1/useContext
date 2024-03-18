import { useContext } from "react"

import { userCont } from "./App"
export function GrandChild(){

    const user = useContext(userCont)

    return <>
        <h1>GrandChild  { user}</h1>
    </>
}