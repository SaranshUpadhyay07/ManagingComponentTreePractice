import React, { useState } from "react";

function InputArea(props) {
  const [texted, setInputTexted] = useState("");

  function ChangeText(event) {
    const newValue = event.target.value;
    setInputTexted(newValue);
    props.onChange(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
    props.addItem(texted); // call parent's add function
    setInputTexted(""); // clear input
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input onChange={ChangeText} type="text" value={texted} />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
