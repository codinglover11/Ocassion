import React from 'react';
import "./HomePage.css";
import vend1 from "..//images/Vendore2.jpeg";
import vend2 from "..//images/vendore3.jpeg";
import adv1 from "..//images/adv1.jpeg";
import adv2 from "..//images/adv2.jpeg";
import adv3 from "..//images/adv3.jpg";
import concert from "..//images/concert.webp";
import vend3 from "..//images/venor4.jpeg";
import vend4 from "..//images/vendore5.jpeg";
import vend5 from "..//images/vendor6.jpeg";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="left">
        <div className="top1"> 
          <h2>20% off on your 1st order</h2>
        </div>

        {/* ✅ Navbar */}
        <div className="choose">
          <ul className="list">
            <li onClick={() => navigate('/Home')}>HOME</li>
            <li onClick={() => navigate('/Vendor')}>VENDORS</li>
            <li onClick={() => navigate('/Service')}>SERVICES</li>
            <li onClick={() => navigate('/Enquire')}>ENQUIRY</li>
          </ul>
        </div>

        <div className="image">
          <img src={concert} alt="" />
        </div>

        <div className="experts">
          <h1 className="top_exp">TOP EXPERTS...</h1>
          <div className="exp">
            <div className="exp_card">
              <img src={vend3} alt="Vendor" />
              <h1>Vedika Gautam</h1>
              <h1>★★★★★</h1>
              <h4 className="ruppes">9000₹</h4>
              <button>Book Now</button>
            </div>
            <div className="exp_card">
              <img src={vend4} alt="Vendor" />
              <h1>Aman Verma</h1>
              <h1>★★★★★</h1>
              <h4 className="ruppes">6000₹</h4>
              <button>Book Now</button>
            </div>
            <div className="exp_card">
              <img src={vend5} alt="Vendor" />
              <h1>Jack</h1>
              <h1>★★★★★</h1>
              <h4 className="ruppes">200$</h4>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Right side */}
      <div className="right">
        <div className="vendor">
          <div className="vendor_card">
            <img src={vend1} alt="Vendor" />
            <h1>Akshita Singhal</h1>
            <h1>★★★★★</h1>
            <h4 className="ruppes">2000₹</h4>
            <button>Book Now</button>
          </div>
          <div className="vendor_card">
            <img src={vend2} alt="Vendor" />
            <h1>Saransh Sharma</h1>
            <h1>★★★★</h1>
            <h4 className="ruppes">1000₹</h4>
            <button>Book Now</button>
          </div>
        </div>

        <div className="advantages">
          <h1>Our Advantages</h1>
          <div className="adv_card">
            <img src={adv1} alt="" />
            <h2>End-to-End Event Handling</h2>
            <p>From planning to execution — you don’t lift a finger, we handle it all professionally.</p>
          </div>
          <div className="adv_card">
            <img src={adv2} alt="" />
            <h2>Customized Experiences</h2>
            <p>Every event is tailored to your theme, taste, and budget — no copy-paste setups.</p>
          </div>
          <div className="adv_card">
            <img src={adv3} alt="" />
            <h2>On-Time & Hassle-Free Delivery</h2>
            <p>Deadlines are sacred. We promise zero last-minute chaos, and 100% satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
