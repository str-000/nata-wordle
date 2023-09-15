import React, { useState } from 'react'
import { WordleContext } from '../../App'

export default function Tile({id , rowId, testw, guessed}) {
    
    const [letter  , setLetter]= useState('')
    const [completed , setCompleted] = useState(true)
    const {guessWord , currentRow , completedRows} = React.useContext(WordleContext)
    const [colors , setColor] = useState({back:"white" , font:"black"})

    const style ={
        backgroundColor: colors.back,
        color: colors.font
    }

    React.useEffect(()=>{   
        if(currentRow === rowId){
            setLetter(guessWord[id])
        }
        if(completedRows.includes(rowId) && completed){
            changeColors()
            setCompleted(false)
        }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guessWord, completedRows])
    

    function changeColors(){
       
            const testwupper = testw.toUpperCase();
            const arrayWord = testwupper.split('')

            if(arrayWord.includes(letter)){
                if (arrayWord[id]===letter){  
                    return setColor({back:'lightgreen' , font:'white'})
                }
                return setColor({back:'gold', font:'white'})
            }
            return setColor({back:"grey" , font:"white"})
        }
    
   
    return (
        <div style={style} className="flex justify-center my-[2px] m-[2px] items-center  w-[62px] h-[31px] border-2">
            <p className="flex self-center mb-2 font-bold text-2xl" >{letter}</p>
            
        </div>
    )
}
