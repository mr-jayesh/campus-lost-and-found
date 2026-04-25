import express from 'express';
import Claim from '../models/Claim.js';
import Item from '../models/Item.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Submit a claim
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { item_id, answers, proof_image_url } = req.body;
    const claim = new Claim({ item_id, claimant_id: req.user._id, answers, proof_image_url });
    await claim.save();
    res.status(201).json(claim);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get claims for an item
router.get('/item/:itemId', authMiddleware, async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    
    // Only the creator of the found item should see the claims
    if (item.created_by.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const claims = await Claim.find({ item_id: req.params.itemId }).populate('claimant_id', 'name email');
    res.json(claims);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
