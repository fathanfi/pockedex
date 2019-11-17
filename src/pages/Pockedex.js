import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from '../components/Loading'
import PockedexPost from '../components/PockedexPost';

export default class Pockedex extends Component {

  static propTypes = {
    pokeUrl: PropTypes.string
  };

  constructor(){
    super();
    this.state = {
      pockedex: {}
    };
  }

  requestPockedex = (targetUrl) => {
    fetch(targetUrl)
      .then(response => response.json())
      .then(responseData => {
        this.state = {
          pockedex: responseData
        };
        if(this.refs.pockedex){
          this.setState(this.state);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount(){
    if(this.props.match !== undefined){
      this.requestPockedex('http://pokeapi.salestock.net/api/v2/pokemon/'+this.props.match.params.id+'/');
    }else if(this.props.pokeUrl !== undefined){
      this.requestPockedex(this.props.pokeUrl);
    }
  };

  render(){
    let pokepost = null;

    if(this.state.pockedex.id !== undefined){
      pokepost = <PockedexPost
        key={'pockedex.key'+this.state.pockedex.id}
        id={this.state.pockedex.id}
        name={this.state.pockedex.name}
        image={this.state.pockedex.sprites.front_default}
        base_experience={this.state.pockedex.base_experience}
        height={this.state.pockedex.height}
        weight={this.state.pockedex.weight}
        types={this.state.pockedex.types}
        />;
    }else{
      pokepost = <Loading />
    }

    return (
      <div ref="pockedex">
        {pokepost}
      </div>
    );
  }
};