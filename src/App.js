import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
   
    <Router>
      <div   className="App">
       <Header />
       <Route path="/" exact component={Home}  />
       <Route path="/:id"  component={Home}  />
       <Footer />
      </div>
    </Router>
   
     
   
  );
}

export default App;
