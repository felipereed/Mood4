import React from 'react';
import '../Styles/App.css';
import Detail from "./Detail"
import Header from './Header'
import Footer from './Footer'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Results from './Results'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

function App() {
  let details = {
    image: 'https://static01.nyt.com/images/2020/03/22/nyregion/21nyvirus-mood-print/21nyvirus-mood4-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    name: 'Restaurant Name',
    address: {
      street: '101 Fake Stree',
      city: 'Fakeland',
      state: 'FK',
      zipCode: '12345'
    },
    phoneNumber: '555 555 5555',
    moreDetails: 'www.google.com'
  }
  const appCallBack = () => {
    console.log('changed')
  }

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
