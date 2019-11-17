import * as PockedexActionTypes from '../actiontypes/pockedex';

const initialState = [];

/**
 * Pockedex Reducers Function, List, Add, Clear, Refresh and Remove
 * Require Actions at PockedexActionTypes
 */
export default function Pockedex(state=initialState, action){
  switch(action.type){
    case PockedexActionTypes.ADD_ARRAY_OF_POCKEDEX:
      return[
        ...state,
        ...action.pockedexs
      ];

    case PockedexActionTypes.NEW_ARRAY_OF_POCKEDEX_TYPE:
      let pockedexs = [];
      for (var i = 0; i < action.pockedexsType.length; i++){
        pockedexs.push(action.pockedexsType[i].pockedex);
      }
      return pockedexs;

    case PockedexActionTypes.ADD_POCKEDEX:
    return[
      ...state,
      action.pockedex
    ];

    case PockedexActionTypes.CLEAR_POCKEDEX:
      return[];

    case PockedexActionTypes.REFRESH_POCKEDEX:
      return state;

    case PockedexActionTypes.REMOVE_POCKEDEX:
      return[
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}
