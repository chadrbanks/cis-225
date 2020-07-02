import React from "react";

function Card(props) {
  return (
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">{props.title}</h4>
      </div>
      <div class="card-body">
        <a
          class="btn btn-lg btn-block btn-outline-primary"
          href="Syllabus.docx"
          target="_blank"
        >
          Docx
        </a>
        <a
          class="btn btn-lg btn-block btn-outline-primary"
          href="Syllabus.pdf"
          target="_blank"
        >
          PDF
        </a>
      </div>
    </div>
  );
}

export default Card;
