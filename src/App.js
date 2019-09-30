import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../src/components/layout/NavBar';
import Index from '../src/components/layout/Index';
import Lyrics from '../src/components/tracks/Lyrics';
import { Provider } from './context';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route exact path='/lyrics/track/:id' component={Lyrics}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
