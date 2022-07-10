import { useEffect } from "react"
import { useState } from "react"

const useKeyPress = (targetKey)=>{
    const [keyPressed, setKeyPressed] = useState(false)
  
    const downHandler=({key})=>{
      if(key === targetKey)
        setKeyPressed(true)
    }
    const upHandler=({key})=>{
      if(key === targetKey)
        setKeyPressed(false)
    }
  
    useEffect(()=>{
      window.addEventListener("keydown",downHandler)
        window.addEventListener("keyup",upHandler)
  
        return()=>{
            window.addEventListener("keydown",downHandler)
            window.addEventListener("keyup",upHandler)
        }
    })
  
    return keyPressed
  
  }

export default useKeyPress