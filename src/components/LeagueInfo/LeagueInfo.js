import React from 'react';
import './LeagueInfo.css';
import found from '../Images/Icon/found 1.png';
import country from '../Images/Icon/flag (1) 1.png'
import gender from '../Images/Icon/male-gender-sign 1.png';
import soccer from '../Images/Icon/football (1) 1.png'
import banner from '../Images/Photo/banner.jpg';
import youtube from '../Images/Icon/YouTube.png';
import facebook from '../Images/Icon/Facebook.png';
import twitter from '../Images/Icon/Twitter.png';
import male from '../Images/Photo/male.png';
import female from '../Images/Photo/female.png';

const LeagueInfo = (props) => {
    const { strCountry, intFormedYear, strGender, strSport, strLeagueAlternate, strLogo } = props.info;
    return (
        <div className="color">


            <div className="hoder"  >
                <div class="transparent-bg-lite"><img src={strLogo} alt="" /></div>
                

            </div>

            <br />






            <div className="card">
                <h2>{strLeagueAlternate}</h2>
                <div className="icon">
                    <p ><img src={found} alt="" srcset="" />  Founded: {intFormedYear}</p>
                    <p><img src={country} alt="" srcset="" /> Country : {strCountry}</p>
                    <p><img src={soccer} alt="" srcset="" /> Sports Type : {strSport}</p>
                    <p><img src={gender} alt="" srcset="" /> Gender : {strGender} </p>
                </div>

                <div className="photo">
                {strGender==="Male"?(
                    <img src={male} alt="" srcset="" />

                ):(
                    <img src={female} alt="" srcset="" />

                )}
                </div>

            </div>
            <div className="text">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nostrum atque, facilis iste magni quod quis numquam porro dicta inventore natus, excepturi hic ad laborum consectetur! At ipsum, quis tempora accusantium, molestias nostrum explicabo ipsam officiis inventore nulla minima velit sunt ipsa sit enim iste veritatis fuga expedita possimus rerum iusto, debitis architecto quisquam reiciendis. Quo, vel ratione. Eum reiciendis atque iure aliquam at laboriosam laborum vel, minus quaerat, maiores, dolore quisquam quas pariatur reprehenderit nihil quod modi eveniet voluptas culpa enim accusamus a cumque. Libero possimus dolor perspiciatis illo? Velit laboriosam optio aliquid obcaecati ut tempora inventore dolore error, ratione officiis fugit cumque accusantium voluptas laborum? Amet deserunt harum, labore repellat ullam ratione blanditiis saepe, nisi officiis eveniet, animi similique possimus excepturi rem eligendi quasi qui distinctio eum consequuntur. Minima, expedita. Adipisci reprehenderit deleniti </p>
            </div>
            <div className="icon-awesome">
              <img src={twitter} alt="" srcset="" />
              <img src={facebook} alt="" srcset="" />
              <img src={youtube} alt="" srcset="" />
            
            </div>
        </div>
    );
};

export default LeagueInfo;