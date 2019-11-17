import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  Collapse,
  ControlLabel,
  FormControl,
  FormGroup,
  Nav,
  Navbar,
  NavItem,
  Panel
} from 'react-bootstrap';

export default class Header extends Component {

  static propTypes = {
    clearPockedex: PropTypes.func.isRequired,
    requestPockedexUrlByType: PropTypes.func.isRequired
  };

  constructor(){
    super();
    this.state = {
      collapsestat: false,
      types: []
    };
  };

  requestTypes = (targetUrl) => {
    fetch(targetUrl)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          types: responseData.results
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  onSelectChange = (event) => {  
    this.props.requestPockedexUrlByType(event.target.value);
  };

  componentDidMount(){
    this.requestTypes('http://pokeapi.salestock.net/api/v2/type/');
  };



  render(){
    return(
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">P<span className="tail-wrapper"><span className="tail-text">okefat</span><div className="yellow-dash-start"></div><div className="yellow-dash-end"></div></span></Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={ () => this.setState({ collapsestat: !this.state.collapsestat }) }>Find By Type</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Collapse in={this.state.collapsestat}>
          <div>
            <Panel>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Type</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select type"
                  onChange={this.onSelectChange.bind(this)}
                  >
                  {this.state.types.map((type, index) => {
                    return(
                      <option key={'select_'+index} value={type.url}>{type.name}</option>
                    );
                  })}
                </FormControl>
              </FormGroup>
            </Panel>
          </div>
        </Collapse>
      </div>
    );
  }
};
