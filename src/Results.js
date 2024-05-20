import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
    <div className="Results">
      <section>
      <h2 className="main-word">{props.results.word}</h2>
        <Phonetic phonetic={props.results.phonetic} />
    {props.results.meanings.map(function (meaning, index) {
      return (
      <section key={index}>
        <Meaning meaning={meaning} />
        </section>
      );
    })}
  </section>
    </div>
    );
  } else {
    return null;
  }
}
