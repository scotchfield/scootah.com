import dispatcher from './dispatcher';
import constants from './constants';

export default {
  getFoe: () => {
    dispatcher.dispatch({
      actionType: constants.actions.GET_FOE
    });
  },

  resetFight: () => {
    dispatcher.dispatch({
      actionType: constants.actions.RESET_FIGHT
    });
  }
}
