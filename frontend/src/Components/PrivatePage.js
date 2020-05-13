import React from 'react';
import axios from 'axios';
import getCookie from './getCookie';

export default class PrivatePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  };

  updateState = () => {
    let token = getCookie('my-token');
    axios.get('http://localhost:4000/items', {headers: {'x-json-web-token': token}})
      .then((res) => {
        this.setState({items: res.data});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount(){
    this.updateState();
  };

  render(){
    return(
      <div>
        <h1>You have successfully logged in. Now, you have access to this page!</h1>
        <h2>List of items:</h2>
        <ul>
          {this.state.items.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
};
