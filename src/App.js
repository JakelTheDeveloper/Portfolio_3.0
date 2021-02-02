import React, { Component } from 'react'
import self from './images/Portfolio3.png'
import './App.css';
import Header from './Components/Header/Header';
import HomeArticle from './Components/Home/HomeArticle';
import AboutArticle from './Components/About/AboutArticle';
import PortfolioArticle from './Components/Portfolio/PortfolioArticle';
import ContactArticle from './Components/Contact/ContactArticle';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header/>
        <main>
          <HomeArticle self = {self}/>
          <AboutArticle/>
          <PortfolioArticle/>
          <ContactArticle/>
        </main>
      </div>
    )
  }
}
export default App
