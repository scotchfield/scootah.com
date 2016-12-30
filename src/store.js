import dispatcher from './dispatcher';
// import constants from '../constants';
import { EventEmitter } from 'events';

import Character from './game/character';
import World from './game/world';

const CHANGE_EVENT = 'change';

var store = {
  character: Character.init(),
  world: World.init()
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

  getWorld() {
    return store.world;
  }
}

const Store = new StoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
Store.dispatchToken = dispatcher.register(action => {
  switch(action.actionType) {
    default:
  }
});

export default Store;
