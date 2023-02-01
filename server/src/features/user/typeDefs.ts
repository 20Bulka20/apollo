const typeDefs = `
    type Users {
      id: ID!
      email: String!
      username: String!
      password: String!
    }
  
    type Query {
      getUsers: [Users!]!
      getUser(email: String!, password: String!): [Users!]!
      me: Users
    }

    type Mutation {
      signUp(
        username: String!
        email: String!
        password: String!
      ): Token!

      signIn(login: String!, password: String!): Token!

      updateUser(id: String, login: String, username: String, password: String ): [Users!]
      
      deleteUserById(id: String!): [Users!]
    }

    type Token {
      userID: ID!
      token: String!      
    }

    schema {
      query: Query
      mutation: Mutation
    }
`;

export default typeDefs;
