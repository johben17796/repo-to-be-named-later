//imports

//return code
export default function Home() {
    return (
        <section>
            <div className="homeBanner">
                <h1>PROJECT NAME TBD</h1>
                <p>TAGLINE TBD TAGLINE TBD TAGLINE TBD TAGLINE TBD</p>
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