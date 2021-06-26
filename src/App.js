import React from 'react';
import './App.css';
import json from './contacts.json';

class App extends React.Component {
  state = {
    contacts: json.slice(0, 5),
    inList: json.slice(0, 5).map((el) => el.id),
  };
  addRandomContact = () => {
    let inList2 = [...this.state.inList];
    let json2 = [...json];
    json2.forEach((el) => {
      if (inList2.includes(el.id)) {
        json2.splice(json2.indexOf(el), 1);
      }
    });
    let random = Math.floor(Math.random() * json2.length);
    let newContact = json2[random];
    let contactCopy = [...this.state.contacts];
    contactCopy.push(newContact);
    inList2.push(newContact.id);
    console.log(json2.length, json.length);
    this.setState({
      contacts: contactCopy,
      inList: inList2,
    });
  };
  sortByName = () => {
    let list = [...this.state.contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: list,
    });
  };

  sortByPopularity = () => {
    let list = [...this.state.contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: list,
    });
  };

  removeContact = (id) => {
    console.log('ids', id);
    let list = [...this.state.contacts];
    const contcattoDelete = list.findIndex((el) => el.id === id);
    list.splice(contcattoDelete, 1);
    this.setState({
      contacts: list,
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add Random Contact </button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((el) => {
              return (
                <>
                  <tr key={el.id}>
                    <td>
                      <img src={el.pictureUrl} />
                    </td>
                    <td>{el.name}</td>
                    <td>{el.popularity}</td>
                    <button onClick={() => this.removeContact(el.id)}>
                      Delete
                    </button>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
