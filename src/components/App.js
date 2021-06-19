//Library Imports
import React from 'react';
//Component Imports
import Header from './shared/header/Header'
import Home from './home/Home'
import Footer from './shared/footer/Footer';


//Main Component
function App() {
  return (
    <div className="App">
      <Header />
      <Home /> 
      <Footer />   
    </div>
  );
}


//Export 
export default App;
