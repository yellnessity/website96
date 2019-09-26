import React from "react";
import Card from "./card.js";

function createCard(props) {

if (props.value > 12 ) {
  for (var i=0;i=i+12;i<=props.value) {
    return (<div className={props.className}><Card /></div>);
  }
}
}

const Itemrow = (props) => (

  <div className="row justify-content-around itemwrap">
    <div className={props.className}>
      <Card />
    </div>
    <div className={props.className}>
      <Card />
    </div>
    <div className={props.className}>
      <Card />
    </div>
    {createCard(props)}
    {createCard(props)}
    {createCard(props)}
  </div>
  );



export default Itemrow;
