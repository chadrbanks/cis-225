import React from "react";
import "./App.css";
import FunctionalExample from "./FunctionalExample";
import ClassExample from "./ClassExample";
import FilterExample from './FilterExample';

let user_data = require('./user_data');

function App() {
  return (
    <div className="App">
      <FunctionalExample data={{lang: user_data.FavLanguage}} />
      <ClassExample data={{account: user_data}} />

      <FilterExample />

      {/* <Route path="/" component={Home} exact />
      <Route exact path="/" component={() => <Home data={{}} />} />  */}

    </div>
  );
}

export default App;
