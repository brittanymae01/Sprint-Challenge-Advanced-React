import React from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';

import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(response => {
      this.setState({
        data: response.data
      })
    })
      .catch(error => {
        console.log('data not received', error)
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div data-testid='card' className='cards'>
          {this.state.data.map(person => (
            <Card
              key={person.id}
              name={person.name}
              country={person.country}
              searches={person.searches} />
          ))}
        </div>
      </div>
    );
  }

}

export default App;
