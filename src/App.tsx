import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CardapioDobebe from './pages/CardapioDoBebe';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/cardapiodobebe" component={CardapioDobebe} />
        </Switch>
      </BrowserRouter>

    </div>

  );
}
