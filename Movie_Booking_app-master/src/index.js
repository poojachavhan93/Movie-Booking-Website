import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from "./common/Details/Details";
import home from "./screens/home/Home"
import BookShow from './screens/bookshow/BookShow';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/details/:id" component={Details} />
      <Route path="/bookshow" component={BookShow} />
      </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
