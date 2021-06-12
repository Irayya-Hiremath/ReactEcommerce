import React from "react"
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Product from "./components/Product"
import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <div>
      <Header/>
      <main>
         <Route exact path='/' component={HomeScreen}/>
         <Route path='/products/:id'component={Product}/>
      </main>
      <Footer/>
     
    </div>
    </Router>
  );
}

export default App;
