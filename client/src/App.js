import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Form from "./pages/Form";
import AppChat from "./components/App-Chat/index";
import Messages from "./components/All-Messages/index"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/chat" component={AppChat} />
          <Route exact path="/messages" component={Messages} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
