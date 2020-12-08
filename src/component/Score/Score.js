import React from "react";


const Score = props => (
  <div>
    <h4>
      Score{props.total}
    </h4>
    <h4>
      {props.status}
    </h4>
    
  </div>
)

export default Score;
