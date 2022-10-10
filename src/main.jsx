import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
