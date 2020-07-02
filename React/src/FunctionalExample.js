import React from "react";
import moment from "moment";

import Card from './Card';

function FunctionalExample(props) {
  let date = moment().format("YYYY-MM-DD hh:mm");

  return (
    <div>
      <h1>Hello Functional World!</h1>
      <p>Favorite Language: {props.data.lang}</p>
      <p>The Current Date is {date}</p>
      <br/>
    </div>
    <Card data={{title:"Cheese"}} />
    <Card data={{title:"Syllabus"}} />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  );
}

export default FunctionalExample;
