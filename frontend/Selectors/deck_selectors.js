export const selectCardsByType = (state, type) => {
  const sortedState = {
    creatures: [],
    lands: [],
    enchantments: [],
    artifacts: [],
    instants: [],
    sorceries: [],
    planeswalkers: []
  };
  const cardIDs = state.cards.keys();
  cardIDs.forEach(cardID => {});
};
