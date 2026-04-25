import mongoose from 'mongoose';

const claimSchema = new mongoose.Schema({
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  claimant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [{ type: String }],
  proof_image_url: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'expired'], default: 'pending' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default mongoose.model('Claim', claimSchema);
