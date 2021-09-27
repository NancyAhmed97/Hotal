import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types"
export default function Room({ room }) {
  let name = room.name;
  let slug = room.slug;
  let images = room.images;
  let price = room.price;

  return (
    <artical className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt="single room" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>Per Night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            features
          </Link>
          <p className="room-info">{name}</p>

        </div>
    </artical>
  );
}
Room.propTypes = {
    room: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
    })
  };