import {Route, Switch} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      {/* <h1>It's working</h1> */}

      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movies" component={Categories}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
