import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import wedding from "..//images/wedding.jpeg";
import Religious from "..//images/Religious.jpeg";
import Corporate from "..//images/Corporate.jpeg";
import College from "..//images/college.jpeg";
import birthday from "..//images/birthdat.jpeg";
import babyshower from "..//images/babyshower.avif";

function Service() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const services = [
    { img: wedding, title: "Wedding" },
    { img: College, title: "College" },
    { img: Corporate, title: "Corporate" },
    { img: birthday, title: "Birthday" },
    { img: Religious, title: "Religious" },
    { img: babyshower, title: "Baby Shower" },
  ];

  const customers = [
    { name: "Vishal", rating: "⭐⭐⭐⭐⭐", comment: "Your services are the best ever!" },
    { name: "Ritika Sharma", rating: "⭐⭐⭐⭐☆", comment: "The wedding setup was absolutely magical!" },
    { name: "Ankit Verma", rating: "⭐⭐⭐⭐⭐", comment: "Smooth coordination and budget-friendly packages. Loved it!" },
    { name: "Shruti Mehta", rating: "⭐⭐⭐⭐☆", comment: "Great vendor support and timely execution." },
  ];

  return (
    <div className="service-page">
      {/* Left Section */}
      <div className="left-section">
        <div className="top-banner">
          <h2>20% off on your 1st order</h2>
        </div>

        <nav className="navbar">
          <ul>
            <li onClick={() => navigate("/Home")}>Home</li>
            <li onClick={() => navigate("/Vendor")}>Vendors</li>
            <li onClick={() => navigate("/Service")}>Services</li>
            <li onClick={() => navigate("/Enquire")}>Enquiry</li>
          </ul>
        </nav>

        <div className="intro-text">
          <h1>Our Company Services!</h1>
          <p>
            At Ocassio, we specialize in end-to-end event planning services — from elegant weddings
            and vibrant college fests to high-impact corporate events and spiritual ceremonies. Our team handles
            every detail, ensuring a seamless and personalized experience.
          </p>
        </div>

       <div className="services-grid">
  {services.map((service, idx) => (
    <div className="service-card" key={idx}>
      <img src={service.img} alt={service.title} />
      <div className="overlay">{service.title}</div>
    </div>
  ))}
</div>


        <div className="action-buttons">
          <button onClick={() => navigate("/Gallery")}>Gallery</button>
          <button onClick={() => alert("Upcoming update!")}> Explore</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Customer Ratings</h2>
        <div className="reviews">
          {customers.map((cust, idx) => (
            <div className="review-card" key={idx}>
              <div className="customer-image">
                <img src={College} alt={cust.name} />
              </div>
              <h3>{cust.name}</h3>
              <p className="rating">{cust.rating}</p>
              <p className="comment">{cust.comment}</p>
            </div>
          ))}
        </div>

        <div className="add-comment">
          <h3>Add Your Comments</h3>
          <input type="text" placeholder="Type something here..." value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default Service;
