import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useCallback } from 'react'

function App() {


  return (
    <>
      <ParaGenerator></ParaGenerator>
    </>
  )
}

function ParaGenerator(){

  const [ words, setWords ] = useState()
  const [ para, setPara ] = useState("")

  
  const generatePara = useCallback(()=>{
    setPara("")
    let generatedParagraph = ""
    const content = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'];

    for (let i = 0; i < words; i++){
    generatedParagraph += content[Math.floor(Math.random() * content.length)] + " "
    }
    
    setPara(generatedParagraph)
  }, [words])
  

  return <div>
    <input type='text' onChange={(e)=>{
      setWords(e.target.value)
    }}></input>

    <button onClick={()=>{
      generatePara()
    }}>Generate</button>

    <p>{para}</p>
  </div>
}


export default App
