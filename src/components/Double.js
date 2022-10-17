import * as React from "react";

const Double = (props) => {
  return (
    <div>
      <div class="wrapper">
        <div>
          <img src={props.img1} style={{ width: "100%" }} />
          <div>
            <p>
              <b>{props.location1}</b>
              <br />
              {props.time1}
            </p>
          </div>
        </div>
        <div>
          <img src={props.img2} style={{ width: "100%" }} />
          <div>
            <p>
              <b>{props.location2}</b>
              <br />
              {props.time2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Double;
