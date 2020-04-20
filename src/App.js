import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import India from './components/India';
import WorldStats from './components/WorldStats';
import ReactGA from 'react-ga';


function App() {

  useEffect(() => {
    ReactGa.initialize('UA-164026859');
    ReactGA.pageview('/');
  });
  return (
   <Router>
    <Fragment>
     <Switch>
       <Route exact path="/" component={India}></Route>
       <Route exact path="/world" component={WorldStats}></Route>
     </Switch>   
    </Fragment>
   </Router> 
  );
}

export default App;
