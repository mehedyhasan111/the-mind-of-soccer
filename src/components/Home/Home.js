import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';
import Header from '../Header/Header';
import idLeague from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }
        , [])
    const sportsLeagues = leagues.slice(0,12);

    

    return (
        <div>
            <Header> </Header>
            <div className="home">
                <h4 style={{ color: "white" }}>Top  {sportsLeagues.length} Leagues :  </h4>

                <div className="row">
                    {
                        sportsLeagues.map((league) => <League
                            league={league}
                            key={idLeague}

                        > </League>

                        )}
                </div>
                



            </div>
        </div>
    );
};

export default Home;