
import express from 'express';
// import type { Request, Response } from 'express';

import { GoogleGenerativeAI } from '@google/generative-ai';

import * as dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const key = process.env.GEMINI_KEY;
const genAI = new GoogleGenerativeAI( key || '' );
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const games = ['Rockband 3', 'Warcraft 3', 'Super Mario Bros 3'];
const gameInject = games.toString();

const prompt = `My favorite video games are ${gameInject}.
 As a modern video game reviewer with a wide knowledge of video games both popular and obscure, please recommend me three more games to play, and explain why I should play them.
 You should recommend games that are lesser in popularity, and games that you are less likely to recommend often.
 Deliver your response as a JSON object which contains three paragraphs summarizing each of your reccomendations under the object name 'recomendations',
 the paragraphs should be named 'summary', and should be accompanied by the title of the recommended game, named 'title'.
 Never include backticks in your response, only the JSON data.
 `;
 
 
//get response based on variable
router.get('/', async (_req: Request, res: Response) => {
    try {
        
        const result = await model.generateContent(prompt);

        res.status(200).json(result.response.text());
    } catch (error) {
        res.status(500).json({error: 'Error fetching Gemini Response.'});
    }
})

export { router as geminiRouter };