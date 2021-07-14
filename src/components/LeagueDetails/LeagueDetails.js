import React from 'react';
import './LeagueDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LeagueInfo from '../LeagueInfo/LeagueInfo';

const LeagueDetails = () => {
    const {idLeague}= useParams();
    const [leagueInfo,setLeagueInfo] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setLeagueInfo(data.leagues))
    },[idLeague])

    return (
        <div className="league-info">
            {
                leagueInfo.map(info=> <LeagueInfo info={info}></LeagueInfo>)
            }
        
            
        </div>
    );
};

export default LeagueDetails;