//imports
import { useState, FormEvent } from "react";
import { searchGamesByName, searchGames } from "../api/searchRAWG";
// import { data } from "react-router-dom";
// import GameList from "../components/GameList";
//return code
export default function Home() {

    const [search, setSearch] = useState<string>('');

    const handleInputchange = (e: any) => {
        const { value } = e.target;
        setSearch(value);
    }

    //Function that uses a text input to search for a game from RAWG
    const searchForGames = async (event: FormEvent, gameTitle: string) => {
        event.preventDefault();
        try {
            const data = await searchGamesByName(gameTitle);
            console.log(data);
        } catch (err) {
            console.error('No matches found!', err);
        }
    }

    //Function to search all games on RAWG
    const searchAllGames = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const data = await searchGames();
            console.log(data);
        } catch (err) {
            console.error('No matches found!', err);
        }
    }

    return (
        <>
        <section>
            <div className="homeBanner">
                <h1>PixelOracle</h1>
                <p>Need a new game? Consult the Oracle...</p>
                {/* background image - simple texture */}
            </div>
            {/* search bar to build rawg request */}
            <form className="searchArea" onSubmit={(event: FormEvent) => searchForGames(event, search)}>
                <input
                    value={search}
                    placeholder="Find a Game!"
                    id="search"
                    onChange={handleInputchange}
                />
                <button type="submit">SEARCH</button>
            </form>
            <form onSubmit={(event: FormEvent) => searchAllGames(event)}>
                <button type="submit">GET ALL GAMES</button>
            </form>
            <p>Or pick from the list below!</p>
            {/* <GameList /> */}
        </section>
        </>
    );
}