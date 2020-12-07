import React from "react";
import "./style.css";

function FruitsCard(props) {
  return (
    <div onClick={() => 
      props.clickfruits(props.id)} className="card col-4-sm">
      <div className="img-thumbnail w-20" id={props.id}>
        <img alt=
        {props.name} src={props.image}/>
        </div>
        </div>
    )
}

export default FruitsCard;
