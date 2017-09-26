export const sortCardsByType = state => {
  console.log(state);
  const sortedCards = {
    creatures: [],
    lands: [],
    enchantments: [],
    artifacts: [],
    instants: [],
    sorceries: [],
    planeswalkers: [],
    other: []
  };
  const cardIDs = Object.keys(state);
  cardIDs.forEach(cardID => {
    if (state[cardID].full_type.includes("Land")) {
      sortedCards["lands"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Creature")) {
      sortedCards["creatures"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Enchantment")) {
      sortedCards["enchantments"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Artifact")) {
      sortedCards["planeswalkers"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Instant")) {
      sortedCards["instants"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Sorcery")) {
      sortedCards["sorceries"].push(state[cardID]);
    } else if (state[cardID].full_type.includes("Planeswalker")) {
      sortedCards["planeswalkers"].push(state[cardID]);
    } else {
      sortedCards["other"].push(state[cardID]);
    }
  });
  console.log(sortedCards);
  return sortedCards;
};
