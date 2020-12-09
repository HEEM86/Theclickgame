import React from "react";
import "./FruitsCard.css";

const FruitsCard = (props) => {
  console.log(props);
  return (
    <div onClick={()=>props.fruitsClicked(props.id)}   className="card col-4-sm">
      <div className="img-thumbnail w-20">
        <img
          alt={props.name}
          src={props.image}
          
          
        />
      </div>

    </div>
  );
};

export default FruitsCard;
