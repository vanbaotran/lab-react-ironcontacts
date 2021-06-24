import React from 'react';
import './App.css';
import json from './contacts.json'

class App extends React.Component {
  state = {
    contacts: json.slice(0,5)
  }
  render() {
    return (
      <div className="App" >
      <table>
        <thead>
          <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map(el=> { return (
            <tr key={el.id}>
            <td><img src={el.pictureUrl}/></td>
            <td>{el.name}</td>
            <td>{el.popularity}</td>
          </tr>
          )  
          })}
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;