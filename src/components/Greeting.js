import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name.length ? `Hello ${name} !` : ""} </p>
    </div>
  );
};

export default Greeting;
