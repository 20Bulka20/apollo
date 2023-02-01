import { IResolverMap } from "interfaces/IResolvers";
import jwt from 'jsonwebtoken';
import { AuthenticationError, UserInputError } from 'apollo-server';
import bcrypt from 'bcrypt'



const createToken = async (user: any, secret: any, expiresIn: any) => {
  const { id, email, username } = user;
  return await jwt.sign({ id, email, username }, secret, {
    expiresIn,
  });
};

export default <IResolverMap>{ 
  signUp: async (
    parent,
    { username, email, password },
    { models, secret },
  ) => {
    password = bcrypt.hashSync(password, 7);
    const user = await models.Users.create({
      username,
      email,
      password,
    });

    return { token: createToken(user, secret, '30m') };
  },
  signIn: async (
    parent,
    { login, password },
    { models, secret },
  ) => {
    const user = await models.Users.findByLogin(login);

    if (!user) {
      throw new UserInputError(
        'No user found with this login credentials.',
      );
    }
    const hashpassword = bcrypt.hashSync(password, 7);
    const validPassword = bcrypt.compareSync(hashpassword, user.password)
    if(validPassword){
        throw new AuthenticationError('Invalid password.');
      }
   
    return { token: createToken(user, secret, '30m'), userID: user.id };
  },
  updateUser: async (parent, args, { models }) => {
    const { id, login, username, password } = args;
    
    try {
      const user = await models.Users.findById(id);
      let hashPassword = bcrypt.hashSync(password, 7);
      await user.set({ login: login, username: username, password: hashPassword  });
      await user.save();
      const users = await models.Users.find();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteUserById: async (parent, args, { models }) => {
    const { id } = args;

    try {
      await models.Users.deleteOne({ _id: id });
      const users = await models.Users.find();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
