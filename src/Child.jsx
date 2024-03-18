
import { useContext } from "react"
import { GrandChild } from "./GrandChild"
import {userCont} from './App'


export function Child(){

 const user = useContext(userCont)

    return<>
        <h1>Child 1 { user} </h1>
        <GrandChild/>
    </>
}