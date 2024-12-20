// import React from 'react';
import { useState } from 'react';
import { getRec } from '../api/gemini';

interface GameRec {
    title: string,
    summary: string
}

//TESTING ARRAYS
// const testGames = ['Bloons Tower Defense 4', 'Silent Hill', 'Apex Legends'];

//DIALOGUE ARRAYS
const greetingArray = ['Awesome Picks! You should check these out!', 'Hmm... let me think... what about these?', 'You sure know your games! Have you tried these?']

// VARIABLES
//TODO: GET REC JSON FROM GEMINI - PARSE - RETURN AS GAMEREC OBJECT ARRAY
const recArray = await getRec();

//GET GAMES ARRAY

//FORMAT REC INTO CARD

function renderRecs(gameRec: GameRec) {
    const title = gameRec.title
    const summary = gameRec.summary

    return (
        <>
            <div className="card">
                <div>
                    {title}
                </div>
                <section className="content">
                    {summary}
                </section>
            </div>
        </>
    );
    // return '';
}

//FORMAT CARDS INTO MODULE

function GameRecsModule(gameRecsArray: GameRec[]) {
    let module: JSX.Element[] = [];
    for (let i = 0; i < gameRecsArray.length; i++) {
        const newCard = renderRecs(gameRecsArray[i]);
        module.push(newCard);
    }
    return module;
}


function GameRecs() {
    const gameRecsMod = GameRecsModule(recArray);
    const randomIndex = Math.floor(Math.random() * greetingArray.length);

    return(
        <section className='recs'>
            <h2>{greetingArray[randomIndex]}</h2>
            <div className='recsModule'>{gameRecsMod}</div>
        </section>
    )
}

//REC MODAL PANEL

const [recPanel, setrecPanel] = useState(false);

function RecPanelButton() {
    const [expandText, setexpandText] = useState(0);
    const text = ['Get Suggestions', 'Get Another']

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!recPanel) {
            setrecPanel(true);
            setexpandText(1);
        } else {
            setrecPanel(false);
            setexpandText(0);
        };
    }

    return(
    <button onSubmit={handleSubmit}>{text[expandText]}</button>
)
}

export default function RecPanel() {
    return (
        <section className='RecsPanel'>
            <RecPanelButton />
            <GameRecs />
        </section>
    )
}