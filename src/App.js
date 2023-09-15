import './App.css';
import Board  from "./components/Board.js"
import { createContext, useState } from 'react';

export const WordleContext = createContext()

function App() {

  const [completedRows , setCompletedRows] = useState([])
  const [guessWord , setGuessWord] = useState("")
  const [currentRow, setCurrentRow] = useState(0)

  function guessTheWord(char){
    if(guessWord.length === 5 ) return
    setGuessWord(guessWord.concat(char))
  }

  function pressEnter(){
    if(guessWord.length<5) return
    
    console.log('Pressed Enter' + currentRow)
    setCurrentRow(currentRow+1)
    setCompletedRows([...completedRows ,currentRow])
    setGuessWord('')
  }

  function backspace(){
    setGuessWord(guessWord.slice(0 , guessWord.length-1))
  }

  return (
    <WordleContext.Provider value={{
      guessTheWord,
      pressEnter,
      completedRows,
      currentRow, 
      guessWord,
      backspace 
      }}>

      <Board/>

    </WordleContext.Provider>
  )
}

export default App;
