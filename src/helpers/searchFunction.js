export const searchByName = (arrey, query) => {
  const lowercaseQuery = query.toLowerCase();

  const result = arrey.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery)
  );

  return result;
};

export const searchByNumber = (arrey, query) => {
  const result = arrey.filter(product => product.number.includes(query));

  return result;
};

const isNumber = value => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const search = (arrey, query) => {
  return isNumber(query)
    ? searchByNumber(arrey, query)
    : searchByName(arrey, query);
};
