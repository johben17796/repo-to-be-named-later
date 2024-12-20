//imports

//return code
export default function Home() {
    return (
        <section>
            <div className="homeBanner">
                <h1>PixelOracle</h1>
                <p>Need a new game? Consult the Oracle...</p>
                {/* background image - simple texture */}
            </div>
            {/* search bar to build rawg request */}
            <form className="searchArea">
                <input placeholder="Search" id="search"/>
                <button type="submit"></button>
            </form>
        </section>
    );
}