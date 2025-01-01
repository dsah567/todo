//user model for  verifying task elements
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
          required: true },
}, { timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;