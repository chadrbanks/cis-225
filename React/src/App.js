import React from "react";
import "./App.css";
// import Homepage from './pages/Homepage';
// import Aboutpage from './pages/Aboutpage'
import FunctionalExample from "./FunctionalExample";
import ClassExample from "./ClassExample";

let user_data = require('./user_data');

// let state = {
//   page: 'home'
// };

// function updatePage( p ){
//   console.log('updatePage p:', p);
//   state.page = p;
//   console.log('state.page:', state.page);
// }

function App() {
  return (
    <div className="App">
      <FunctionalExample data={{lang: user_data.FavLanguage}} />
      <ClassExample data={{account: user_data}} />
{/* 
      <Homepage data={{page: state.page, update: updatePage}} />
      <Aboutpage data={{page: state.page, update: updatePage}} /> */}
    </div>
  );
}

export default App;
