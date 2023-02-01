import { mergeSchemas } from 'graphql-tools';
import todosSchema from './todos/schema';
import userSchema from './user/schema'
/* CODE-GENERATOR - ROOTSCEHMA IMPORT */

export default mergeSchemas({
  schemas: [
    todosSchema,
    userSchema,
    /* CODE-GENERATOR - ROOTSCEHMA DEFAULT */
  ],
});
