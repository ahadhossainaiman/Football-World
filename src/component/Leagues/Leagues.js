import React from 'react';
import { Card, Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Leagues.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Leagues = (props) => {
    const {strLeague,strSport,idLeague} = props.league;
    return (
        <>
         <Col lg={3} md={2} sm={12} style={{marginTop: '20px',width:'30rem'}}>
            <Card bg='light'>
                {/* <Card.Img variant="top" src={} /> */}
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text className='text-start'>Sports Type: {strSport}</Card.Text>
                    <Button as={Link} to={`/league/${idLeague}`}>Explore <FontAwesomeIcon icon={ faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </Col>
       </>  
        

    );
};

export default Leagues;