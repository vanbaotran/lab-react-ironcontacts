import React from 'react';
import './App.css';
import json from './contacts.json'

class App extends React.Component {
  state = {
    contacts: json.slice(0,5)
  }
  addRandomContact =()=>{
    let json2 = [...json].splice(5)
    let random= Math.floor(Math.random()*json2.length)
    let newContact= json2[random]
    let contactCopy= [...this.state.contacts]
    contactCopy.push(newContact)
    console.log(json2.length, json.length)
    this.setState({
      contacts: contactCopy
    })
  }
  sortByName = () =>{
    //localeCompare by name
    let contacts2 = [...this.state.contacts]
    let sortedByName = contacts2.sort(function(a,b){
      return a.name.localeCompare(b.name)
    })
    this.setState({
      contacts: sortedByName
    })
  }
  sortByPopularity = () => {
    let contacts3 = [...this.state.contacts]
    let sortedByPopularity = contacts3.sort((a,b)=>b.popularity-a.popularity)
    this.setState({
      contacts: sortedByPopularity
    })
  }
  render() {
    return (
      <div className="App" >
         <button onClick={this.addRandomContact}>Add Random Contact </button>
         <button onClick={this.sortByName}>Sort By Name</button>
         <button onClick={this.sortByPopularity}>Sort By Popularity</button>
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
            <td><img src={el.pictureUrl} alt='profile-pic'/></td>
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