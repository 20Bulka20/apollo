import { createContext, useContext } from 'react';
interface AuthContext {
  token: any;
  userID: any;
  login?: any;
  logout?: any;
}
export const AuthContext = createContext<AuthContext>({
  token: null,
  userID: null,
  login: () => {},
  logout: () => {},
});
export const useAuthContext = () => useContext(AuthContext);
