const combat = {
  init: () => {
    return {
      state: 'idle'
    };
  },
  getFoe: (state) => {
    state.foe = {
      name: 'Evil Villain'
    };
  }
};

export default combat;
