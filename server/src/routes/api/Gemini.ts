
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GameRec } from '../../models/Recs';

import * as dotenv from 'dotenv';
dotenv.config();

const key = process.env.GEMINI_KEY;
console.log(key);
const genAI = new GoogleGenerativeAI(key || '');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


// GET ARRAY OF FAVORITED GAMES

//USE ARRAY TO GENERATE RECOMMENDATIONS

export async function getRec(gamesArray: string[]): Promise<GameRec[]> {
    const gameArray = gamesArray
    const gameInject = gameArray.toString();

    const prompt = `My favorite video games are ${gameInject}.
 As a modern video game reviewer with a wide knowledge of video games both popular and obscure, please recommend me three more games to play, and explain why I should play them.
 You should recommend games that are lesser in popularity, and games that you are less likely to recommend often.
 Deliver your response as a JSON object which contains three paragraphs summarizing each of your reccomendations under the object name 'recomendations',
 the paragraphs should be named 'summary', and should be accompanied by the title of the recommended game, named 'title'. 
 Never include backticks in your response, only the JSON data.
 `;

    const result = await model.generateContent(prompt);

    console.log(result.response.text());
    const textResult = result.response.text();

    function extractJsonString(input: string): string {
        return input.replace(/^```json\s*|\s*```$/g, '').trim();
    }


    function parseJsonArray(input: string): any {
        try {
            const cleanedString = extractJsonString(input);
            return JSON.parse(cleanedString);
        } catch (error) {
            console.error("Failed to parse JSON:", error);
            throw error;
        }
    }

    const jsonArray = parseJsonArray(textResult);

    return jsonArray;
}
