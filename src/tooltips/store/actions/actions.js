import * as actionTypes from './actionTypes';

export const show = toolTip => {
  return {
    type: actionTypes.SHOW,
    value: toolTip
  };
};

export const hide = () => {
  return {
    type: actionTypes.HIDE
  };
};
