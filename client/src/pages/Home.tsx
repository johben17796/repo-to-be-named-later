//imports
import { useState } from "react";
//return code
export default function Home() {

    const [search, setSearch] = useState('');

    const handleInputchange = (e: any) => {
        const { value } = e.target;
        setSearch(value);
    }

    return (
        <section>
            <div className="homeBanner">
                <h1>PixelOracle</h1>
                <p>Need a new game? Consult the Oracle...</p>
                {/* background image - simple texture */}
            </div>
            {/* search bar to build rawg request */}
            <form className="searchArea">
                <input 
                    value={search}
                    placeholder="Find a Game!" 
                    id="search"
                    onChange={handleInputchange} 
                    />
                <button type="submit"></button>
            </form>
        </section>
    );
}