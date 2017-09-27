export const sortCardsByType = state => {
  const sortedCards = {
    Lands: [],
    Creatures: [],
    Instants: [],
    Sorceries: [],
    Planeswalkers: [],
    Artifacts: [],
    Enchantments: [],
    other: []
  };
  const cardIDs = Object.keys(state);
  cardIDs.forEach(cardID => {
    if (state[cardID].full_type.includes("Land")) {
      sortedCards["Lands"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Creature")) {
      sortedCards["Creatures"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Enchantment")) {
      sortedCards["Enchantments"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Artifact")) {
      sortedCards["Artifacts"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Instant")) {
      sortedCards["Instants"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Sorcery")) {
      sortedCards["Sorceries"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Planeswalker")) {
      sortedCards["Planeswalkers"].push(state[cardID]);
    } else {
      sortedCards["other"].push(state[cardID]);
    }
  });
  return sortedCards;
};
