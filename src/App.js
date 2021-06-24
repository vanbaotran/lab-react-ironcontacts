import React from 'react';
import './App.css';
import json from './contacts.json'

class App extends React.Component {
  state = {
    contacts: json.slice(0,5)
  }
  addRandomContact =()=>{
    let random= Math.floor(Math.random()*json.length)
    let newContact= json[random]
    let contactCopy= [...this.state.contacts]
    contactCopy.push(newContact)

    this.setState({
      contacts: contactCopy
    })

  }
  render() {
    return (
      <div className="App" >
         <button onClick={this.addRandomContact}>Add Random Contact </button>
         
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