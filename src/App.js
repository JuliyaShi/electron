import React, { useState, useEffect} from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import { Container, Dimmer, Loader} from 'semantic-ui-react';
//import './App.css'
import Vehicles from './components/Vehicles';
import Characters from './components/Characters';
import Buttons from './components/Buttons';
import history from './components/history';


function App() {
  const [vehicles, setVehicles] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     async function fetchVehicles(){
       let res = await fetch('https://swapi.dev/api/vehicles/')
       let data = await res.json();
        setVehicles(data.results);
        setLoading(false);
     }

     async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/')
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    fetchVehicles();
    fetchPeople();
    setLoading(false);
  },[]);
  
  
  return (
    <>
    
     <Router history={history}>
       <Buttons />
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <Switch>
              <Route exact path ='/vehicles' component={Vehicles}>
              <Vehicles data={vehicles} />
              </Route>
              <Route exact path ='/characters' component={Characters}>
              <Characters data={people} />
              </Route>
          </Switch>)}
      
      </Container>
     </Router>
    </>
  );
}



export default App;
