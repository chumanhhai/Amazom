import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux"
import Main from "./component/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import store from "./redux/store"
import ErrorFetching from "./component/ErrorFetching";
import ProductDetail from "./component/ProductDetail";
import Gateway from "./component/Gateway";

library.add(fas)

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/gateway">
            <Gateway/>
          </Route>
          <Route exact path="/product/:index">
            <ProductDetail/>
          </Route>
          <Route exact path="/*">
            <ErrorFetching/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
    
  );
}

export default App;
