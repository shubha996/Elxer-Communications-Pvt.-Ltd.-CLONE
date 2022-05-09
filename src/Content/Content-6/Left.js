import React from 'react'
import './left.css';
import Carousel from "react-bootstrap/Carousel";
import data from "../../Assets/Comments";

function Left() {
  return (
    <div className="left-comment">
        <h2>
          Don't just take our word for it...
          <br />
          see what others have to say.
        </h2>
        <div className="comments-carousel">
          <Carousel id='comments-section-carousel-indicator'>
            {data.map((fetch) => {
              return (
                <Carousel.Item interval={1000}>
                  <div className="main-comments-card-div">
                    <div className="quote-image">
                      <img
                        id="comment-section-img"
                        src="https://elxer.com/assets/images/icons/left-quotes-sign.svg"
                        alt=""
                      />
                    </div>
                    <div className="coment-div">
                      <p>{fetch.comment}</p>
                    </div>
                    <div className="user-details-div">
                      <div className="avatar-div">
                        <img
                          id="avatar-img"
                          src="https://elxer.com/assets/images/avatar.png"
                          alt=""
                        />
                      </div>
                      <div className="name-rating-div">
                        <h4>{fetch.name}</h4>
                        <span>{fetch.starrating}</span>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
  )
}
export default Left;