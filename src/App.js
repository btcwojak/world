import "./App.css";
import Single from "./components/Single";
import Double from "./components/Double";

import london2 from "./images/london2.jpg";
import london3 from "./images/london3.jpg";
import london4 from "./images/london4.jpg"; //big
import london5 from "./images/london5.jpg";
import london6 from "./images/london6.jpg";
import london7 from "./images/london7.jpg";
import london8 from "./images/london8.jpg"; //big
import birmingham2 from "./images/birmingham2.jpg";
import birmingham3 from "./images/birmingham3.jpg"; //big
import birmingham4 from "./images/birmingham4.jpg";
import birmingham5 from "./images/birmingham5.jpg";
import bletchley1 from "./images/bletchley1.jpg";
import cirencester1 from "./images/cirencester1.jpg";
import coventry1 from "./images/coventry1.jpg";
import leamington1 from "./images/leamington1.jpg";
import leamington2 from "./images/leamington2.jpg";
import liverpool1 from "./images/liverpool1.jpg";
import ryton1 from "./images/ryton1.jpg";
import southam1 from "./images/southam1.jpg"; //big
import speke1 from "./images/speke1.jpg";
import stratford1 from "./images/stratford1.jpg";
import warwick2 from "./images/warwick2.jpg";
import warwick3 from "./images/warwick3.jpg";
import westwittering2 from "./images/westwittering2.jpg";
import york2 from "./images/york2.jpg";
import york3 from "./images/york3.jpg";
import york4 from "./images/york4.jpg"; //big

function App() {
  return (
    <div className="App">
      <header>
        <p>
          <h1>Spudg World</h1>
          <h4>Original photos from different times, locations and cultures</h4>
        </p>
      </header>
      <Single
        img={london4}
        location={"London, England"}
        time={"October 2022"}
      />
      <Double
        img1={birmingham4}
        img2={warwick3}
        location1={"Birmingham, England"}
        location2={"Leamington Spa, England"}
        time1={"September 2022"}
        time2={"July 2021"}
      />
      <Double
        img1={london3}
        img2={york2}
        location1={"London, England"}
        location2={"York, England"}
        time1={"October 2022"}
        time2={"October 2021"}
      />
      <Double
        img1={liverpool1}
        img2={speke1}
        location1={"Liverpool, England"}
        location2={"Speke, England"}
        time1={"May 2022"}
        time2={"May 2022"}
      />
      <Single
        img={london8}
        location={"London, England"}
        time={"October 2022"}
      />
      <Double
        img1={london2}
        img2={coventry1}
        location1={"London, England"}
        location2={"Coventry, England"}
        time1={"October 2022"}
        time2={"June 2021"}
      />
      <Double
        img1={ryton1}
        img2={birmingham2}
        location1={"Ryton-on-Dunsmore, England"}
        location2={"Birmingham, England"}
        time1={"December 2021"}
        time2={"September 2022"}
      />

      <Single
        img={birmingham3}
        location={"Birmingham, England"}
        time={"June 2022"}
      />
      <Double
        img1={london6}
        img2={york3}
        location1={"London, England"}
        location2={"York, England"}
        time1={"October 2022"}
        time2={"October 2021"}
      />
      <Double
        img1={warwick2}
        img2={bletchley1}
        location1={"Warwick, England"}
        location2={"Bletchley, England"}
        time1={"August 2022"}
        time2={"October 2021"}
      />
      <Double
        img1={leamington2}
        img2={cirencester1}
        location1={"Leamington Spa, England"}
        location2={"Cirencester, England"}
        time1={"June 2021"}
        time2={"March 2022"}
      />
      <Single img={southam1} location={"Southam, England"} time={"June 2021"} />
      <Double
        img1={leamington1}
        img2={birmingham5}
        location1={"Leamington Spa, England"}
        location2={"Birmingham, England"}
        time1={"May 2021"}
        time2={"March 2022"}
      />
      <Single img={york4} location={"York, England"} time={"October 2021"} />
      <Double
        img1={westwittering2}
        img2={london7}
        location1={"West Wittering, England"}
        location2={"London, England"}
        time1={"September 2022"}
        time2={"October 2022"}
      />
      <Double
        img1={stratford1}
        img2={london5}
        location1={"Stratford, England"}
        location2={"London, England"}
        time1={"May 2022"}
        time2={"October 2021"}
      />
    </div>
  );
}

export default App;
