import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './isAuthenticated';

function PrivateRoute(props){
  return(
    <Route render={() => {
      console.log('Props', props);
      console.log('Props', props.location);
      console.log('Props', props.children);
      if(isAuthenticated()) {
        return(props.children);
      } else {
        return(
          <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        );
      }
    }}/>
  );
};

export default PrivateRoute;
