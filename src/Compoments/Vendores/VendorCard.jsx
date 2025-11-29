import React from "react";
import "./Vendor.css";

const VendorCard = ({ name, category, price, image }) => {
  return (
    <div className="vendor-card">
      <img src={image} alt={name} className="vendor-img" />
      <h3>{name}</h3>
      {category && <p>{category}</p>} {/* optional, agar category available hai */}
      <p>Starting from ₹{price}</p>
      <button>Book Now</button>
    </div>
  );
};

export default VendorCard;
