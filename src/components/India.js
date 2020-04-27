import React,{Fragment,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Button } from '@material-ui/core';
import Statewise from './Statewise';

const WorldStats = () => {
    const [latest, setlatest] = useState([]);
    useEffect(() => {
        fetch(`https://corona.lmao.ninja/v2/countries/India`)
          .then(res => res.json())
          .then(data => {
            setlatest(data);
          })
          .catch(err => console.log(err));
    });

    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();
    var x=latest.cases;
    var y=latest.recovered;
    var per=(y/x)*100;
    var n=per.toFixed(2);
    return (
    <Fragment>
        <h1 className="text-center">COVID-19 TRACKER INDIA</h1>
        <Button variant="contained" color="primary">
           <Link style={{color:"white"}} to="/world">
                Worldwide Stats
           </Link>
         </Button>
          <CardDeck>
           <Card bg="warning" text="white" className="text-center" style={{margin:"10px"}}>
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text text="white">
                {latest.cases}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small text="white">Last Updated {lastUpdated}</small>
            </Card.Footer>
          </Card>
          <Card bg="danger" text="white" className="text-center" style={{margin:"10px"}}>
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Text>
                {latest.deaths}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small text="white"> Last Updated {lastUpdated}</small>
            </Card.Footer>
          </Card>
          <Card bg="info" text="white" className="text-center" style={{margin:"10px"}}>
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
                {latest.recovered}
              </Card.Text>
              <Card.Text>
                {n}% People Recovered
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small text="white"> Last Updated {lastUpdated}</small>
            </Card.Footer>
          </Card>
         </CardDeck>
         <Statewise/>
        </Fragment>
    )
}

export default WorldStats;