import React from 'react';
import '../Styles/App.css';
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Results from './Results'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className='page-style'>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/results/:location/:searchTerm/:latitude/:longitude" render={(routerProps) =>
              <Results searchTerm={routerProps.match.params.searchTerm} location={routerProps.match.params.location} latitude={routerProps.match.params.latitude} longitude={routerProps.match.params.longitude} />}>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
