import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage } from './Components/LoginPage';
import PublicPage from './Components/PublicPage';
import PrivateRoute from './Components/PrivateRoute';
import PrivatePage from './Components/PrivatePage';
import SuperPrivatePage from './Components/SuperPrivatePage';

const BASE_URL = 'http://localhost:4000';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to='/public'>Public</Link>
        </li>
        <li>
          <Link to='/private'>Private</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/public'>
          <PublicPage />
        </Route>
        <Route path='/login'>
            <LoginPage baseUrl={BASE_URL}/>
        </Route>
        <PrivateRoute path='/private'>
          <PrivatePage />
        </PrivateRoute>
        <PrivateRoute path='/superprivate'>
          <SuperPrivatePage />
        </PrivateRoute>
      </Switch>
    </div>
  </BrowserRouter>, document.getElementById('root')
);
