import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic}</span>
    </div>
  );
}
