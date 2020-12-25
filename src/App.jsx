import React, { useEffect, useState } from 'react';
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
import Pets from './Components/pets';
import Search from './Components/search';
import SearchResults from './Components/searchresults';
import AdminForm from './Components/adminform';
import AdminDashboard from './Components/admindash';
import { MainContext } from './Context/context';
import Login from './Components/login';
import Edit from './Components/edit';
import { getUserApi, getAllUsers, getAllPets } from '../src/Api/api.js';
import UserFullProfile from './Components/userfullprofile';
import PetFullProfile from './Components/petfullprofile';
import BasicSearchResults from './Components/basicSearchResults';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [telephone, setTelephone] = useState();
  const [bio, setBio] = useState();
  const [password, setPassword] = useState();
  const [fostered, setFostered] = useState(false);
  const [adopted, setAdopted] = useState(false);
  const [userPetStatus, setUserPetStatus] = useState();
  const [allPets, setAllPets] = useState();
  const [userPets, setUserPets] = useState();
  const [pets, setPets] = useState();
  const [basicSearchResults, setBasicSearchResults] = useState();


  useEffect(() => {
    getUserApi()
      .then(res => {
        setFirstName(res.firstName);
        setLastName(res.lastName);
        setTelephone(res.telephone);
        setEmail(res.email);
        setBio(res.bio);
        setUserPets(res.petsOwned);
      })
      .catch(err => console.log(err));
    getAllUsers()
      .then(res => {
        setUsers(res);
      })
    getAllPets()
      .then(res => {
        setAllPets(res);
      })

    setUserPetStatus(7);
    setAdopted(true);
    setFostered(false);
  }, [currentUser])


  return (
    <MainContext.Provider value={{
      users, setUsers,
      firstName, setFirstName,
      lastName, setLastName,
      fostered, adopted, userPetStatus,
      email, setEmail,
      telephone, setTelephone,
      allPets, setAllPets,
      password, setPassword,
      currentUser, setCurrentUser,
      bio, setBio,
      userPets, setUserPets,
      pets, setPets,
      basicSearchResults, setBasicSearchResults
    }}>
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
          <Route path="/pet_page/:id" component={Pets}>
          </Route>
        </Switch>
        <Switch>
          <Route path="/search">
            <NavBar />
            <Search />
          </Route>
        </Switch>
        <Switch>
          <Route path="/basic_search_results/:type" component={BasicSearchResults}>
          </Route>
        </Switch>
        <Switch>
          <Route path="/admin">
            <NavBar />
            <AdminForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/admindashboard">
            <NavBar />
            <AdminDashboard />
          </Route>
        </Switch>
        <Switch>
          <Route path="/logged_out">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/edit">
            <NavBar />
            <Edit />
          </Route>
        </Switch>
        <Switch>
          <Route path="/users/:id" component={UserFullProfile}>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/pet_profile/:id" component={PetFullProfile} />
        </Switch>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
