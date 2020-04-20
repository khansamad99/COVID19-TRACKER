import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import India from './components/India';
import WorldStats from './components/WorldStats';



function App() {
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
