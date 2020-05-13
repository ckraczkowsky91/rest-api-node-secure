import React from 'react';
import { Link } from 'react-router-dom';

export default class PublicPage extends React.Component{
  render(){
    return(
      <div>
        <h1>This is a public page, everyone has access to this page!</h1>
        <Link to='/superprivate'>This is a super private page</Link>
      </div>
    );
  };
};
