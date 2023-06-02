import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import { Container, Toolbar } from '@mui/material';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Toolbar />
        <Container sx={{ p: 3 }} >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
