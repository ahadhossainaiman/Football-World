import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../image/Photo/Rectangle 28.png'
import './Home.css'

const Home = () => {
    
    const [leagues,setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0,16)))
    },[])
    return (
         <>
              <img src={ Banner} alt="" className='banner'/>
              <h1 className='poster-tittle'>Football World</h1>
            <div className='container-fluid'>
               <Container>
                  <Row>
                     {
                       leagues.map(league => <Leagues league={league}></Leagues>)
                     }
                  </Row>
                </Container>
            </div>
      </>
    );
};

export default Home;