const itemsService = require('../services/itemServices');

const getAllItems = (req, res) => {
  const items = itemsService.getAllItems();
  res.json(items);
};

const getItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = itemsService.getItemById(id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
};

const createItem = (req, res) => {
  const newItem = itemsService.createItem(req.body.name);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = itemsService.updateItem(id, req.body.name);
  if (!updatedItem) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(updatedItem);
};

const deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  itemsService.deleteItem(id);
  res.status(204).send();
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};