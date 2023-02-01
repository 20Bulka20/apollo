import { IResolverMap } from 'interfaces/IResolvers';
import { Todos } from '../model';


export default <IResolverMap>{
  getTodos: async (parent, args, { models }, info) => {    

    try {
      const todos = await models.Todos.find();
      return todos;
    } catch (error) { }
  },
};