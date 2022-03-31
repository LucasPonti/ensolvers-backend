import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
  task: String,
  complete: Boolean,
});

export default mongoose.model('tareas', tareaSchema);
