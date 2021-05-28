import React from "react";
import "./style.css";
import RatingContainer from "../StarRating.js/RatingContainer";

function FeaturedCard({
  shopName,
  rating,
  numOfRatings,
  src,
  description,
  location,
  phone,
  address,
  featuredFood,
}) {

  return (
    <div className="card m-1">
      <div className="card-body">
        <h5 className="card-title">{shopName}</h5>
        {/* <img src={src} alt={src} /> */}
        <p className="card-text">
          <strong>Featured Food: </strong>
          {featuredFood}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Location:</strong> {location}
        </li>
        <li className="list-group-item">
          <strong>Address: </strong>
          {address}
        </li>
        <li className="list-group-item">
          <strong>Phone: </strong>
          {phone}
        </li>
      </ul>
      <div className="card-body d-flex">
        <a href="https://www.vallartaexpress.com/menu/" className="card-link">
          Menu
        </a>
        <a href="https://www.vallartaexpress.com/" className="card-link">
          View Website
        </a>
        <i className="ml-auto"><strong>Average Rating:</strong> {rating} out of 5 stars! ({numOfRatings} Customers)</i>
      </div>
      <div className="">

        <RatingContainer />
      </div>
    </div>

  );
}
export default FeaturedCard;
