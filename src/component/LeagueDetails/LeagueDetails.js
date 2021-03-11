import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import logoLocation from '../../image/Icon/found 1.png';
import flag from '../../image/Icon/flag (1) 1.png';
import Football from '../../image/Icon/football (1) 1.png';
import Gender from '../../image/Icon/male-gender-sign 1.png';
import teamPosterMale from '../../image/Photo/Rectangle 28.png';
import teamPosterFemale from '../../image/Photo/female.png';
import Twitter from '../../image/Icon/Twitter.png';
import Fb from '../../image/Icon/Facebook.png';
import Toutube from '../../image/Icon/YouTube.png';

const LeagueDetails = () => {
    const {leagueId} = useParams();;
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]));
},[leagueId]);

    const {intFormedYear,strCountry,strDescriptionEN,strDescriptionFR,strFacebook,strPoster,strSport,strTwitter,strYoutube,strLeague,strGender,strLogo} = details;

    return(
        <>
                <div>
                    <div className="teamBanner">
                                <img src={strPoster} alt=""/>
                                <img src={strLogo} alt="" className='logo'/>  
                    </div>      
                </div>
                <div class="container league">
                   <div class="row p-3 row-cols-1 row-cols-sm-1 row-cols-md-2">
                        <div class="col league-details">
                           <h2>{strLeague}</h2>
                           <h5><img src={logoLocation} alt=""/> {intFormedYear}</h5>
                           <h5><img src={flag} alt=""/> Country: {strCountry}</h5>
                           <h5><img src={Football} alt=""/> Sports Type: {strSport}</h5>
                           <h5><img src={Gender} alt=""/> Sports Type: {strGender}</h5>
                        </div>
                      <div class="col team-poster gy-5">
                        {
                            strGender === "Male" ? <img src={teamPosterMale} alt=""/>: <img src={teamPosterFemale} alt=""/>
                            
                        }      
                      </div>
                   </div>
                </div>

                <div className='container leagueDetails mt-5 p-2'>
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>
                <div className="social-link">
                    <a href={strTwitter}><img src={Twitter} alt=""/></a>
                    <a href={strFacebook}><img src={Fb} alt=""/></a>
                    <a href={strYoutube}><img src={Toutube} alt=""/></a>
                </div>   
        </>
    );
};

export default LeagueDetails;