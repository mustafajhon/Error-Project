import "./project.css";
import React from "react";

function GetName() {
  let name = document.getElementById("fistName").value;
  let Lastname = document.getElementById("lastName").value;
  console.log(name, Lastname);
}

function Project() {
  return (
    <main>
      <div className="form" action="">
        <input
          id="fistName"
          className="form-input"
          placeholder="First Name"
          type="text"
        />
        <input
          id="lastName"
          className="form-input"
          placeholder="Last Name"
          type="text"
        />
        <button onClick={GetName} className="form-btn">
          Get your Name
        </button>
      </div>
    </main>
  );
}

export default Project;
