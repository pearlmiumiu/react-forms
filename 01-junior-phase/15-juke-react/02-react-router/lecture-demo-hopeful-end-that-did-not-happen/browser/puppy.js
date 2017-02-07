import React, { Component } from 'react';
import axios from 'axios';

export default class SinglePuppy extends Component {
  constructor () {
    super();
    this.state = {};
  }
  componentDidMount () {
    axios.get(`/api/puppies/${this.props.routeParams.name}`)
      .then(response => response.data)
      .then(puppy => { this.setState({puppy})})
      .catch(console.error.bind(console))
  }
  render () {
    // If we have the following as well, the componentDidMount is the same, so nothing is reset
    // <Link to={`/puppy/Taylor`}>Taylor</ Link> 
    const puppy = this.state.puppy;
    return (
        <div>
          {puppy ? <div>
            <h4>{puppy.name}</h4>
            <div><img src={puppy.image} /></div>
          </div> : <h3>Loading...</h3>}
        </div>
      )
  }
}