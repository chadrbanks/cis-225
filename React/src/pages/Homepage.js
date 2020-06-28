import React from "react";

let p;

function localUpdate(){
    console.log('localUpdate!');
    p.data.update('about');
    console.log('p:', p);
}

function Homepage(props) {
  console.log('Homepage props:', props);
  p = props;

  let disp;
  if (props.data.page === "home") disp = "block";
  else disp = "none";

  //props.data.update('cheese');

  return (
    <div style={{display: disp}} >
      <h1>Homepage</h1>

      <p>More info? See the <button onClick={localUpdate} >about page</button>.</p>
    </div>
  );
}

export default Homepage;
