import mongoose, { Schema, Document } from 'mongoose';

export interface IUsers extends Document {
  email: string;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String,
  validate: {
    validator: async function(email: string) {
      const user = await this.constructor.findOne({ email });
      if(user) {
        if(this.id === user.id) {
          return true;
        }
        return false;
      }
      return true;
    },
    message: props => 'The specified email address is already in use.'
  },
  required: [true, 'User email required']},
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.statics.findByLogin = async function (login: any) {
  let user = await this.findOne({
    username: login,
  });
 
  if (!user) {
    user = await this.findOne({ email: login });
  } 
  return user;
};
const Users = mongoose.model<IUsers>('User', UserSchema);

export { Users };