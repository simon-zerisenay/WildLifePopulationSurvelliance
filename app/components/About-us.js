import React from "react";
import { Button } from "./Button";
import "./About-us.css";
function Aboutus() {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-box">
        <h1 className="about-us-text"> About Fujairah Research Center </h1>
        <p className="about-us-intro">
        The Fujairah research centre plays a central role in the Emirate of Fujairah's vision and alignment to the UAE innovation strategy 2071.
The Centre is focused on applied research and technology innovation for desert and tropical areas and encompasses environmental, genetic, and marine.
        </p>
        <p className="about-us-contination">
        Our vision is to achieve a sustainable economy in Fujairah through cutting-edge innovative research for:
Efficient, safe, and sustainable use of natural resources.
        </p>
        

        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
        >
          Who we are
        </Button>
        
      </div>
    </div>
  );
}

export default Aboutus;
