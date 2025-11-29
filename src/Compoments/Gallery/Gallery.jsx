import React from "react";
import "./Gallery.css";
import wedding from "../images/wedding.jpeg";
import birthday from "../images/birthdat.jpeg";
import College from "../images/college.jpeg";
import Corporate from "../images/Corporate.jpeg";
import Religious from "../images/Religious.jpeg";
import babyshower from "../images/babyshower.avif";

function Gallery() {
  const images = [
    { src: wedding, title: "Wedding" },
    { src: birthday, title: "Birthday" },
    { src: College, title: "College" },
    { src: Corporate, title: "Corporate" },
    { src: Religious, title: "Religious" },
    { src: babyshower, title: "Baby Shower" },
    { src: wedding, title: "Extra Image" }
  ];

  return (
    <div className="gallery-page">
      <div className="cinematic-top"></div>
      <div className="cinematic-bottom"></div>

      <h1>Gallery</h1>

      <div className="cinematic-frame">
        <div className="scroll-container">
          {/* Original List */}
          {images.map((img, idx) => (
            <div className="gallery-card" key={idx}>
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">{img.title}</div>
            </div>
          ))}
          {/* Duplicate List for Seamless Loop */}
          {images.map((img, idx) => (
            <div className="gallery-card" key={`dup-${idx}`}>
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
