/**
 * Import Required Component
 * React, Component, PropTypes, LinkContainer,ListGroup, ListGroupItem and Progress
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import {
  ListGroup,
  ListGroupItem
 } from 'react-bootstrap';
 import Progress from '../components/Progress';

export default class Home extends Component {

  static propTypes= {
    pockedexs: PropTypes.array.isRequired,
    requestPockedexUrl: PropTypes.func.isRequired
  };

  componentWillMount(){
    if(this.props.pockedexs.length === 0){
      this.props.requestPockedexUrl('http://pokeapi.salestock.net/api/v2/pokemon/');
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleButton = () => {
    this.props.requestPockedexUrl();
  };

  handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.props.requestPockedexUrl();
    }
  };

  render(){
    if (this.props.pockedexs.length !== 0) {
      return(
        <div>
          <ListGroup>
            {this.props.pockedexs.map((pockedex, index) => {
              return(
                <LinkContainer key={index} to={pockedex.url.replace('http://pokeapi.salestock.net/api/v2/pokemon','/pockedex')}>
                  <ListGroupItem>
                    {pockedex.name}
                  </ListGroupItem>
                </LinkContainer>
              );
            })}
          </ListGroup>
        </div>
      );
    }

    return(
      <Progress/>
    );

  };
};