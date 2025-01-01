//user model for  verifying users elements
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  fullName: { 
    type: String,
    required: true 
    },
  email: { 
    type: String, 
    required: true, 
    unique: true 
    },
  password: { 
    type: String, 
    required: true 
    },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]  //reference to the Todo model
});

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

export default User;