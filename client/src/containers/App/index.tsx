import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import Auth from 'containers/Auth';

import FullPageLoader from 'components/Loaders/FullPageLoader';
import { AuthContext } from 'context/authContex';
import { useHistory } from 'react-router';
import { useState } from 'react';

const Todos = React.lazy(() => import('containers/Todos'));
const SignIn = React.lazy(() => import('containers/Auth/SignIn'));
const SignUp = React.lazy(() => import('containers/Auth/SignUp'));
const ResetPassword = React.lazy(() => import('containers/Auth/ResetPassword'));

const MainPage = React.lazy(() => import('containers/MainPage/MainPage'));

const App: React.FC = () => {
  const history = useHistory();
  const myToken = localStorage.getItem('token');
  const myID = localStorage.getItem('userID');

  const [token, setToken] = useState(myToken);
  const [userID, setUserId] = useState(myID);

  const login = (token: any, userID: any) => {
    localStorage.setItem('token', token as string);
    localStorage.setItem('userID', userID as string);
    setToken(token);
    setUserId(userID);
  };
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    setToken(null);
    setUserId(null);
    history.push('/signIn');
  };

  return (
    <Suspense fallback={FullPageLoader}>
      <AuthContext.Provider value={{ token, userID, login: login, logout: logout }}>
        <Switch>
          {!token && <Redirect from="/" to="signIn" exact />}
          {!token && <Redirect from="/todos" to="signIn" exact />}
          {token && <Redirect from="/" to="/todos" exact />}
          {token && <Redirect from="/signIn" to="/todos" exact />}
          {token && <Redirect from="/signUp" to="/todos" exact />}
          <Route exact path="/todos">
            <Todos />
          </Route>
          <Route exact path="/auth">
            <Auth name="Auth" />
          </Route>
          <Route exact path="/MainPage">
            <MainPage />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/resetPassword">
            <ResetPassword />
          </Route>
        </Switch>
      </AuthContext.Provider>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
