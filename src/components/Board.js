import React from 'react'
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'

export default function Board() {
    return (
        <div className="flex flex-col justify-between items-center" >
            <h1 className="font-extrabold text-5xl m-4">NATA WORDLE</h1>

            <h1 className="font-extrabold text-1xl m-1">boards #1-4</h1>   
            <div className="flex flex-row flex-wrap">
                <Grid testw={'pinki'}/>
                <Grid testw={'pluta'}/>
                <Grid testw={'grela'}/>
                <Grid testw={'sączy'}/>
            </div>

            <h1 className="font-extrabold text-1xl m-1">boards #5-8</h1>   
            <div className="flex flex-row flex-wrap">
                <Grid testw={'kurve'}/>
                <Grid testw={'snusy'}/>
                <Grid testw={'wojaż'}/>
                <Grid testw={'hałat'}/>
            </div>
            
            <h1 className="font-extrabold text-1xl m-1">boards #9-12</h1>   
            <div className="flex flex-row flex-wrap">
                <Grid testw={'robal'}/>
                <Grid testw={'basen'}/>
                <Grid testw={'eczek'}/>
                <Grid testw={'ambro'}/>
            </div>

            <h1 className="font-extrabold text-1xl m-1">boards #13-16</h1>   
            <div className="flex flex-row flex-wrap">
                <Grid testw={'panda'}/>
                <Grid testw={'błaut'}/>
                <Grid testw={'sport'}/>
                <Grid testw={'kutas'}/>
            </div>

            <Keyboard/>
        </div>
    )
}
