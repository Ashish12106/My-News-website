import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
          <News key="/" newurl="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=aa5aec85d15545acaab5fa8d28b8f304" title="Top Headlines" catgory="Home"/>
          </Route>
          <Route exact path="/Entertainment">
          <News key="entertainment" newurl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=aa5aec85d15545acaab5fa8d28b8f304" title="Entertainment News"catgory="Entertainment News"/>
          </Route>
          <Route exact path="/Sports">
          <News key="sports" newurl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aa5aec85d15545acaab5fa8d28b8f304" title="Sports News"catgory="Sports News"/>
          </Route>
          <Route exact path="/Technology">
          <News key="tech" newurl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=aa5aec85d15545acaab5fa8d28b8f304" title="Technology News"catgory="Technology News"/>
          </Route>  
          <Route exact path="/Business">
          <News key="business" newurl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aa5aec85d15545acaab5fa8d28b8f304" title="Business News"catgory="Business News"/>
          </Route>
        </Switch>
        

        </Router>      
      </div>
    )
  }
}

