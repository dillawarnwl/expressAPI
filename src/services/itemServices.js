let items = [];

const getAllItems = () => items;

const getItemById = (id) => items.find(i => i.id === id);

const createItem = (name) => {
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  return newItem;
};

const updateItem = (id, name) => {
  const item = items.find(i => i.id === id);
  if (item) {
    item.name = name;
  }
  return item;
};

const deleteItem = (id) => {
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};