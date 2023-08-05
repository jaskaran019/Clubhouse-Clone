import './App.css';
import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotifications from './pages/AllowNotifications';
import Home from './pages/Home';
import PlanLayout from './pages/Layouts/PlanLayout';
import AppLayout from './pages/Layouts/AppLayout';
import Explore from './pages/Explore.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        exact path = {[
          "/",
          "/invite",
          "/get_username",
          "/code_confirm",
          "/allow_notifications",
        ]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path = "/" component = {Welcome} />
            <Route exact path = "/invite" component = {PhoneConfirmation} />
            <Route exact path = "/code_confirm" component = {CodeConfirm} />
            <Route exact path = "/allow_notifications" component = {AllowNotifications}/>
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path = {["/home", "/explore"]}>
        <AppLayout>
          <Switch>
            <Route exact path = "/home" component = {Home}></Route>
            <Route exact path = "/explore" component = {Explore}></Route>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
};

export default App;
