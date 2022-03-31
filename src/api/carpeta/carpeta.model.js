import mongoose from 'mongoose';

const carpetaSchema = new mongoose.Schema({
  files: String,
});

export default mongoose.model('carpetas', carpetaSchema);
