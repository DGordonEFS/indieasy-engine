import * as actionTypes from './actionTypes';

export const setTheme = themeId => {
  return {
    type: actionTypes.SET_THEME,
    value: themeId
  };
};
