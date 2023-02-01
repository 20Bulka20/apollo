import { IResolverMap } from 'interfaces/IResolvers';

export default <IResolverMap>{
  getUsers: async (parent, args, { models }) => {
    try {
      const users = await models.Users.find();
      return users;
    } catch (error) {}
  },
  getUser: async (parent, args, { models }) => {
    try {
      const { email, password } = args;
      const user = await models.Users.findOne({ email : email, password: password});
      
      return user;
    } catch (error) {}
  },
  me: async (parent, args, { models, me }) => {
    if (!me) {
      return null;
    }
  },
};