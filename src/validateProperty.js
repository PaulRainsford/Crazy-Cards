export function validateProperty(person, CardList, property) {
  const filterByProperty = card => {
    if (card[property].length === 0) {
      return true;
    }
    return card[property].includes(person[property]);
  };
  return CardList.filter(filterByProperty);
}