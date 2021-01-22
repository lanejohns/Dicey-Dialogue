import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import * as sessionActions from "./store/session"
import LoginFormPage from './components/LoginFormPage/index'
import SignupFormPage from './components/SignupFormPage/index'
import Navigation from './components/Navigation/index'

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
        <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
