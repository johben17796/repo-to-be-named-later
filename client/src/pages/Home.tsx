//imports
import { useState, FormEvent } from "react";
import { searchGamesByName } from "../api/searchRAWG";
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
            <p>Or pick from the list below!</p>
            {/* <GameList /> */}
        </section>
        </>
    );
}