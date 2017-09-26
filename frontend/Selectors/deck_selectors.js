export const sortCardsByType = state => {
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
