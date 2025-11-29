import React, { useState } from "react";
import "./Enquire.css";
import Custom from "../images/customer_care.jpeg";
import { useNavigate } from "react-router-dom";

function Enquire() {
  const navigate = useNavigate();

  // Chatbot state
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]); // full chat history

  const API_KEY = "AIzaSyD_oaNqnV45OvzeBCszrOJ58inr8wyHBXE"; 
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const handleAsk = async () => {
    if (!query.trim()) return;

    // User ka msg add kar
    const newMessages = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);

    // API call
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: query }] }],
      }),
    });

    const data = await res.json();
    const ans =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ No response from bot";

    // Bot ka msg add kar
    setMessages([...newMessages, { sender: "bot", text: ans }]);
    setQuery(""); // input clear
  };

  return (
    <div className="Home">
      {/* LEFT SIDE SAME */}
      <div className="left">
        <div className="top1">
          <h2>20% off on your 1st Booking</h2>
        </div>

        <div className="choose">
          <ul className="list">
            <button className="list_butt" onClick={() => navigate("/Home")}>
              <li>HOME</li>
            </button>
            <button className="list_butt" onClick={() => navigate("/Vendor")}>
              <li>VENDORS</li>
            </button>
            <button className="list_butt" onClick={() => navigate("/Service")}>
              <li>SERVICES</li>
            </button>
            <button className="list_butt" onClick={() => navigate("/Enquiry")}>
              <li>ENQUIRY</li>
            </button>
          </ul>
        </div>

        <div className="Contacts">
          <h2>ENQUIRE NOW</h2>
          <p>
            Have a question or want to book us? Fill the form below and we’ll
            get back to you shortly.
          </p>
          <div className="form">
            <h1>We're Here to Help</h1>
            <div className="cust_img">
              <img src={Custom} alt="" />
            </div>
            <form>
              <div className="label_input">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <br />
              <div className="label_input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <br />
              <div className="label_input">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" />
              </div>
              <br />
              <div className="label_input">
                <label htmlFor="event">Event Type</label>
                <select id="event">
                  <option>Choose Event Type</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>College Fest</option>
                  <option>Birthday Party</option>
                  <option>Religious Event</option>
                </select>
              </div>
              <br />
              <div className="label_input">
                <label htmlFor="date">Date Of Event</label>
                <input type="date" id="date" />
              </div>
              <br />
              <div className="issue_box">
                <label htmlFor="issue">Describe your Issue</label>
                <textarea id="issue"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="Contact_Details">
          <h1>OUR CONTACTS</h1>
          <ul>
            <li>Phone Number: 7014325545</li>
            <li>Email ID: piyushtewani11@gmail.com</li>
            <li>X(Twitter): xxxxxxxxxxx</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE - CHATBOT */}
      <div className="right">
        <div className="top_head">
          <h1>Our ChatBot Supports 24/7</h1>
        </div>

        <div className="ChatBot">
          <div className="Chatbot_Top">
            <h1>Our Assistant will help to Solve your query</h1>
          </div>

          <div className="chat_window">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat_msg ${msg.sender === "user" ? "user" : "bot"}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          <div className="Chatbot_Bottom">
            <input
              type="text"
              placeholder="Ask Your Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            />
            <button onClick={handleAsk}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquire;
