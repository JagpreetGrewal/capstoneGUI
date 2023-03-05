import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from "./App";
import MainPage from './MainPage';


// const app = (
//   <Router>
//       <App />
//   </Router>
// )

// ReactDOM.render(app, document.getElementById('root'));

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/MainPage" component={MainPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
