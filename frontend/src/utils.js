export const countByField = (items, field) => {
  const map = {};
  items.forEach(item => {
    map[item[field]] = (map[item[field]] || 0) + 1;
  });
  return map;
};
