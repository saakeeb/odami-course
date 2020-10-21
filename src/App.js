import React from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Banner></Banner> */}
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
