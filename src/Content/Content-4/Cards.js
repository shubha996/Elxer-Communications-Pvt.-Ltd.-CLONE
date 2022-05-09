import React from "react";
import "./cards.css";
import cards from "../../Assets/Cards_Data";

function Cards() {
  return (
    <div className="cards-div">
      {cards.map((data) => {
        return (
          <>
            <div className="main-container-div clearfix">
              <div className="one-third">
                <img src={data.img} alt="" />
              </div>
              <div className="two-third">
                <div>
                  <h3>{data.h3}</h3>
                  <p>{data.p}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Cards;
