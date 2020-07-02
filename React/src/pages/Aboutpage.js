import React from "react";



function Aboutpage(props) {
  console.log("Aboutpage props:", props);

  let disp;
  if (props.data.page === "about") disp = "block";
  else disp = "none";

  return (
    <div style={{ display: disp }}>
      <h1>Aboutpage</h1>

      
    </div>
  );
}

export default Aboutpage;
