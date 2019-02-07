import React, { Component } from 'react';
import NavBar from './layout/NavBar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import ObservationDetails from './components/ObservationDetails';
import CreateObservation from './views/CreateObservation';
import tested from './views/tested';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/observation/:id' component={ObservationDetails} />
            <Route path='/create' component={CreateObservation} />
            <Route path='/tested' component={tested} />
          </Switch>
        </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
