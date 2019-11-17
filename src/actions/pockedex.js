import * as PockedexActionTypes from '../actiontypes/pockedex';

export const addPockedex = pockedex => {
  return {
    type: PockedexActionTypes.ADD_POCKEDEX,
    pockedex
  };
};

export const addArrayOfPockedex = pockedexs => {
  return{
    type: PockedexActionTypes.ADD_ARRAY_OF_POCKEDEX,
    pockedexs
  };
};

export const newArrayOfPockedexType = pockedexsType => {
  return{
    type: PockedexActionTypes.NEW_ARRAY_OF_POCKEDEX_TYPE,
    pockedexsType
  };
};

export const refreshPockedexs = () => {
  return {
    type: PockedexActionTypes.REFRESH_POCKEDEX
  }
};

export const removePockedex = index => {
  return {
    type: PockedexActionTypes.REMOVE_POCKEDEX,
    index
  };
};

export const clearPockedex = () => {
  return {
    type: PockedexActionTypes.CLEAR_POCKEDEX
  };
};
