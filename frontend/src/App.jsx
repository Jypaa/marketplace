
import { useState, useCallback, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route,
  Switch } 
from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";

import Store from './store/pages/Store';
import AddProduct from './store/pages/AddProduct';
import Users from './users/pages/Users';
import Authenticate from './users/pages/Authenticate';
import MainNavigation from './shared/components/navigation/MainNavigation';

import { AuthContext } from './shared/context/auth-context';

import './App.css';

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState(false);
  const [userId, setuser] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(false);



  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setuser(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({userId: uid, token, expiration: tokenExpirationDate.toISOString()})
    )
  },[]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token &&
        new Date(storedData.expiration) > new Date() //if greater, the expiration is in the future
      ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  const logout = useCallback(() => {
    setToken(null);
    setuser(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData'); 
  },[]);

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Store />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/store/new" exact>
          <AddProduct />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Store />
        </Route>
        <Route path="/auth">
          <Authenticate />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  
  return (
    <AuthContext.Provider
      value={{ 
        isLoggedIn: !!token, 
        token: token, 
        userId: userId, 
        login: login, 
        logout: logout
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <MainNavigation />
          <main>
            {routes}
          </main>
        </Router>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}
export default App;