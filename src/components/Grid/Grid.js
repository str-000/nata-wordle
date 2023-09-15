import React, { useState, useEffect } from 'react'
import Row from './Row'
import { WordleContext } from '../../App'

export default function Grid({testw}) {
    const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    const {guessWord} = React.useContext(WordleContext)
    const [guessed , setGuessed] = useState(false)
    
    useEffect(() => {
        if (guessWord === testw.toUpperCase()) {
            setGuessed(true);
        }
    }, [guessWord, testw]);
    
    console.log(testw.toUpperCase() + " " + guessed + " -> ( " + guessWord + " ) ");

    return (
        <div className="m-4" >
            {
                rows.map((row, index ) => <Row key={index} id={index} testw={testw} guessed={guessed}/> )             
            }
        </div>
    )
}
