const formatData = (listArray, itemArray) => {
  listArray.forEach(list => {
    list.item = itemArray.filter(e => e.list_id === list.id);
    return list;
  });
  return listArray;
};

module.exports = formatData;
