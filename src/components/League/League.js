import React, { useEffect,  useState } from 'react';
import './League.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';



const League = (props) => {

  const { strSport, strLeague, idLeague } = props.league;
  const [leagueLogo,setLeagueLogo] = useState([]);

  const history = useHistory();

  useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setLeagueLogo(data.leagues))
  }
  ,[idLeague])

  const showNavigation = idLeague=>{
    const url = `/league/${idLeague}`;
    history.push(url);
  }
  
    
 

  return (
    <div className="col-md-4 mt-4 text-center ">
      <div className="leagues">
       {
          leagueLogo.map(logo=> <img src={logo.strLogo} alt="LOGO"></img>)
       }

        <h4>{strLeague}</h4>
        <p>Sports Type : {strSport}</p>
        <Button onClick={()=>showNavigation(idLeague)}   variant="contained" color="primary">
          Explore
          
        </Button>



      </div>
    </div>

  );
};

export default League;