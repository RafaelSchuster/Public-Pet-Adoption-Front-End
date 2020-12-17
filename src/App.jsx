import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Profile from './Components/profile';
import NavBar from './Components/navbar';
import MyPets from './Components/mypets';
import Pets from './Components/Pets';
import Search from './Components/search';
import SearchResults from './Components/searchresults';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className='main'>
            <Main />
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route path='/profile'>
          <NavBar />
          <Profile />
        </Route>
      </Switch>
      <Switch>
        <Route path="/mypets">
          <NavBar />
          <MyPets />
        </Route>
      </Switch>
      <Switch>
        <Route path="/pets">
          <NavBar />
          <Pets/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/search">
          <NavBar />
          <Search/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/searchresults">
          <NavBar />
          <SearchResults/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
