import dispatcher from './dispatcher';
import { EventEmitter } from 'events';

import Character from './game/character';
import Combat from './game/combat';

import Constants from './constants';

const CHANGE_EVENT = 'change';

var store = {
  character: Character.init(),
  combat: Combat.init()
};

class StoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getCharacter() {
    return store.character;
  }

  getCombat() {
    return store.combat;
  }
}

const Store = new StoreClass();


Store.dispatchToken = dispatcher.register(action => {
  switch(action.actionType) {
    case Constants.actions.GET_FOE:
      let character = Store.getCharacter();
      let combat = Store.getCombat();

      combat.state = 'combat';
      combat.foe = Combat.getFoe();

      // You always win, because to me, you're a winner.
      let newSkill = Character.skills.getRandom();
      combat.result = { skill: newSkill };
      character.skills[newSkill] = character.skills[newSkill] ? character.skills[newSkill] + 1 : 1;

      Store.emitChange();
      break;

    case Constants.actions.RESET_FIGHT:
      store.character = Character.init();
      store.combat = Combat.init();

      Store.emitChange();
      break;

    default:
  }
});

export default Store;
