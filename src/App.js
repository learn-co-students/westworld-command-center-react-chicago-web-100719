import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {
  state={
    areas:[],
    hosts: []
  }

  componentDidMount(){
    this.fetchHosts()
    this.fetchAreas()
  }

  fetchAreas = () =>{
    fetch('http://localhost:4000/areas')
    .then(resp => resp.json())
    .then(areas => this.setState({areas:areas}))
  }

  fetchHosts = () =>{
    fetch('http://localhost:4000/hosts')
    .then(resp => resp.json())
    .then(hosts => this.setState({hosts:hosts}))
  }

  activeHosts = () => this.state.hosts.filter(host => host.active)

  render(){
    return (
      <Segment id='app'>
        <WestworldMap 
          areas={this.state.areas}
          hosts={this.activeHosts()}
        />
        <Headquarters 
          hosts={this.state.hosts}
        />
      </Segment>
    )
  }
}

export default App;
