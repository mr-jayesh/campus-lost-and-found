import express from 'express';
import Item from '../models/Item.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Get all items (feed)
router.get('/', async (req, res) => {
  try {
    const { type, category, status } = req.query;
    let query = {};
    if (type) query.type = type;
    if (category) query.category = category;
    if (status) query.status = status;

    const items = await Item.find(query).sort({ created_at: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create item
router.post('/', authMiddleware, async (req, res) => {
  try {
    const item = new Item({ ...req.body, created_by: req.user._id });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single item
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
