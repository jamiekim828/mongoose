// user model
import mongoose, { Document } from 'mongoose';

export type UserDocument = Document & {
  name: string;
  address: string[];
  phone: string;
  email: string;
};

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: { type: [String] },
  phone: { type: String },
  email: { type: String, unique: true },
});

export default mongoose.model<UserDocument>('User', UserSchema);
