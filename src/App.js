import React from "react"
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";



function App() {
  return (
    <div>
      <Header/>
      <main>
         <HomeScreen/>
      </main>
      <Footer/>
     
    </div>
  );
}

export default App;
