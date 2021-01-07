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
import PetsPage from './Components/petspage';
import Search from './Components/search';
import AdminForm from './Components/adminform';
import AdminDashboard from './Components/admindash';
import { MainContext } from './Context/context';
import Login from './Components/login';
import Edit from './Components/edit';
import { getUserApi, getAllUsers, getAllPets, getAdminApi } from '../src/Api/api.js';
import UserFullProfile from './Components/userfullprofile';
import PetFullProfile from './Components/petfullprofile';
import BasicSearchResults from './Components/basicSearchResults';
import AdminLogin from './Components/adminLogin';
import { ProtectedRoute } from './Components/protectedRoute';

function App() {
  const [userId, setUserId] = useState()
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
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [refresher, setRefresher] = useState(false);
  const [savedPets, setSavedPets] = useState();
  const [petsSaved, setPetsSaved] = useState([]);
  const [saved, setSaved] = useState();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    getUserApi(token)
      .then(res => {
        setUserId(res.id);
        setFirstName(res.firstName);
        setLastName(res.lastName);
        setTelephone(res.telephone);
        setEmail(res.email);
        setBio(res.bio);
        setUserPets(res.petsOwned);
        setSavedPets(res.petsSaved);
        setAdmin(res.admin);
      })
      .catch(err => console.log(err));
    getAllUsers(token)
      .then(res => {
        setUsers(res);
      })
    getAllPets(token)
      .then(res => {
        setAllPets(res);
      })
  }, [token, refresher, saved])


  return (
    <MainContext.Provider value={{
      users, setUsers, userId,
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
      basicSearchResults, setBasicSearchResults,
      token, setToken,
      setRefresher, savedPets, setSavedPets,
      petsSaved, setPetsSaved,
      saved, setSaved,
      admin
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
          <Route path='/profile/:id' component={Profile} />
        </Switch>
        <Switch>
          <Route path="/mypets">
            <NavBar />
            <MyPets />
          </Route>
        </Switch>
        <Switch>
          <Route path="/pet_page/:id" component={PetsPage}>
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
          <ProtectedRoute exact path="/admin" component={AdminForm} admin={admin} />
        </Switch>
        <Switch>
          <Route path="/adminlogin">
            <NavBar />
            <AdminLogin />
          </Route>
        </Switch>
        <Switch>
          <ProtectedRoute path="/admindashboard" component={AdminDashboard} admin={admin} />
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
