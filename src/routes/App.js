import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PockedexActionCreators from '../actions/pockedex';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../pages/Home';
import Pockedex from '../pages/Pockedex';
import NotFound from '../pages/NotFound';

import Header from '../components/Header';
import LoadingPage from '../components/LoadingPage';

class App extends Component {

  static next;         
  static totalReqUrl; 

  // App props
  static propTypes = {
    pockedexs: PropTypes.array.isRequired
  };

  constructor(){
    super();
    this.state = {
      done: true,
      progress: 0
    };
  };

  requestAllPockedexUrl = (targetUrl) =>{
    this.setState({done:false});
    fetch(targetUrl)
      .then(response => response.json())
      .then(responseData => {
        this.props.dispatch(PockedexActionCreators.addArrayOfPockedex(responseData.results));
        this.calculateProgress(responseData.count);                                          
        this.next = responseData.next;                                                        
        this.requestNextPockedexUrl();                                                         
      })
      .catch((error) => {
        console.error(error);
      });
  }
  requestNextPockedexUrl = () => {
    if(this.next !== null){                       
      this.requestAllPockedexUrl(this.next);
    }else{                                       
      this.setState({done:true});
    }
  };
  requestPockedexUrl = (targetUrl) => {
    let url;
    if (targetUrl === null || targetUrl === undefined){
      url = this.next;
    }else{
      url = targetUrl;
    }
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        this.props.dispatch(PockedexActionCreators.addArrayOfPockedex(responseData.results)); 
        this.next = responseData.next;                                                        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  requestPockedexUrlByType = (typeUrl) => {
    fetch(typeUrl)
      .then(response => response.json())
      .then(responseData => {
        this.props.dispatch(PockedexActionCreators.newArrayOfPockedexType(responseData.pockedex));   
        this.next = null;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  calculateProgress = (count) => {
    if (this.next === undefined || this.next === null){
      this.totalReqUrl = count;
    }else{
      let hold = this.next.replace('http://pokeapi.salestock.net/api/v2/pokemon/?offset=','');
      let percent = (hold/count) * 100;
      if (this.refs.progress) {
        this.setState({
          progress: percent
        });
      }
    }
  };

  render(){
    const { dispatch, pockedexs } = this.props;
    const clearPockedex = bindActionCreators(PockedexActionCreators.clearPockedex, dispatch);

    if(this.state.done){
      return(
        <div>

          <BrowserRouter>
            <div className="main_container">

              <Header requestPockedexUrlByType={this.requestPockedexUrlByType.bind(this)} requestAllPockedexUrl={this.requestAllPockedexUrl.bind(this)} clearPockedex={clearPockedex} />

              <Switch>

                <Route exact path="/" component={ (props) => <Home {...props} pockedexs={pockedexs} requestPockedexUrl={this.requestPockedexUrl.bind(this)}/> }/>
                <Route path="/pockedex/:id" component={Pockedex} />
                <Route path="/loading/" component={LoadingPage} />
                <Route component={NotFound} />

              </Switch>
            </div>
          </BrowserRouter>

        </div>
      );
    }
    return(
      <div className="main_container" ref="progress">
        <LoadingPage progress={this.state.progress}/>
      </div>
    );
  }
};


const mapStateToProps = state => (
  {
    pockedexs: state
  }
);

export default connect(mapStateToProps)(App);