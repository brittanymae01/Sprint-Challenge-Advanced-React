import React from 'react';
import './App.css';
import Card from './components/Card'
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
      console.log(response)
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className='cards'>
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
