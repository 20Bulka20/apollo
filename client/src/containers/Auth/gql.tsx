import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    getUsers {
      id
      email
      password
      username
    }
  }
`;
export const GET_USER = gql`
  query {
    getUser {
      id
      email
      password
      username
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password) {
      token
    }
  }
`;
export const SIGNIN_USER = gql`
  mutation SignIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      userID
    }
  }
`;
