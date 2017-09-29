export const sortCardsByType = state => {
  const sortedCards = {
    Lands: {},
    Creatures: {},
    Instants: {},
    Sorceries: {},
    Planeswalkers: {},
    Artifacts: {},
    Enchantments: {},
    other: {}
  };
  const cardIDs = Object.keys(state);
  cardIDs.forEach(cardID => {
    if (state[cardID].full_type.includes("Land")) {
      sortedCards["Lands"][cardID] = state[cardID];
    } else if (state[cardID].full_type.includes("Creature")) {
      sortedCards["Creatures"][cardID] = state[cardID];
    } else if (state[cardID].full_type.includes("Enchantment")) {
      sortedCards["Enchantments"][cardID] = state[cardID];
    } else if (state[cardID].full_type.includes("Artifact")) {
      sortedCards["Artifacts"][cardID] = state[cardID];
    } else if (state[cardID].full_type.includes("Instant")) {
      sortedCards["Instants"][cardID] = state[cardID];
    } else if (state[cardID].full_type.includes("Sorcery")) {
      sortedCards["Sorceries"][cardID] = state[cardID];
    } else if (state[cardID].full_type.includes("Planeswalker")) {
      sortedCards["Planeswalkers"][cardID] = state[cardID];
    } else {
      sortedCards["other"][cardID] = state[cardID];
    }
  });
  return sortedCards;
};
