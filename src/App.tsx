import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CardapioDobebe from './pages/CardapioDoBebe';
import { Button } from 'antd';
import Home from './pages/Home';


export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route exact path="/cardapiodobebe" component={CardapioDobebe} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>

    </div>

  );
}
