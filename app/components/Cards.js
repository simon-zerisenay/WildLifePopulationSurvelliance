import React from "react";
import CardItems from "./CardItems";
import "./CardItems.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Explore Our Previous Research Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/camel-pro.jpg"
              text="ensuring camel production using cutting-edge technologies"
              label="Camels"
              path="/services"
            />
            <CardItems
              src="images/pollution.jpg"
              text="POLLUTION MONITORING &
              MODELING
              "
              label="Environment"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/honey.jpg"
              text="Beekeeping Technologies"
              label="Honeybee"
              path="/services"
            />
            <CardItems
              src="images/plant.jpg"
              text="Sustainable agriculture in the UAE"
              label="Plants"
              path="/services"
            />
            <CardItems
              src="images/marine-1.jpg"
              text="The waters of Fujairah"
              label="Marine"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
