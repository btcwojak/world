import * as React from "react";

const Single = (props) => {
  return (
    <div>
      <img src={props.img} style={{ width: "80%" }} />
      <p>
        <b>{props.location}</b>
        <br />
        {props.time}
      </p>
    </div>
  );
};

export default Single;
