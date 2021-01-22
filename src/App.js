import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { MainPage } from "./pages/MainPage";
import { AdminPage } from "./pages/AdminPage";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to ="/">React Shopping Cart</Link>
              <Link to ="/admin">admin</Link>
            </header>
            <main>
              <div className="content">
                <Switch>
                  <Route path="/" exact><MainPage /></Route>
                  <Route path="/admin"><AdminPage /></Route>
                </Switch>
              </div>
            </main>
            <footer>All rights reserved</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
