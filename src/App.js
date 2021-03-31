import React from 'react';
import {BrowserRouter as Router,
Switch,
Route} from "react-router-dom";
import './App.css';
import logo from './truck.png';


import View from './containers/view/View'
import DriverInfo from './containers/driverInfo'
import Billdesk from '../src/containers/billdesk/billdesk'
import AddNew from '../src/containers/AddNew/AddNew'
import HomeComponent from './components/homeComponent/homeComponent' 
import Signup from './components/signup';
import Dashboard from './components/Dashboard/Dashboard'
import AddVehicleInfo from './containers/VehicleInfo/AddVehicleInfo';
import VehicleInfo from './containers/VehicleInfo/VehicleInfo'
import LandingPage from './components/landingPage/landingPage';
import Navbar from './components/landingPage/navbar'
import AddDriver from './containers/addDriver';
import Slider from './components/landingPage/Carousel'
import landingPage from './components/landingPage/landingPage';
function App() {
  return (
    
  <Router>
    <div className="App">
  
 
  
    <Switch>

<Route exact path="/">
<Navbar/>

  <Slider/>
  <LandingPage/>
  </Route>
<Route path="/login">
<Navbar/>
  <HomeComponent/>
</Route>
<Route path="/signup">
<Navbar/>
  <Signup></Signup>
</Route>
<Route path="/dashboard">
<Dashboard/>
</Route>
<Route path ="/logout">
<Navbar/>
<HomeComponent></HomeComponent>
</Route>
<Route path="/addTrip">
  <Dashboard/>
<AddNew/>
</Route>
<Route path="/billing">
  <Dashboard/>
  <Billdesk/>
</Route>
<Route path="/view">
  <Dashboard/>
  <View/>
</Route>
<Route path="/addvehicleinfo">
  <Dashboard/>
  <AddVehicleInfo/>
</Route>
<Route path="/vehicleinfo">
  <Dashboard/>
  <VehicleInfo/>
</Route>
<Route path="/driver">
  <Dashboard/>
  <DriverInfo/>
</Route>
<Route path="/adddriver">
  <Dashboard/>
  <AddDriver/>
</Route>
    </Switch>
  
  
    </div>
    
    </Router>
  );
}

export default App;
