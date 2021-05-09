import React from "react";
import "./SupportUs.css";

export default function SupportUs() {
  return (
    <div className="container">
      <ConsiderDonating />
      <OurSponsors />
    </div>
  );
}

const ConsiderDonating = () => (
  <>
    <h1>Consider Donating</h1>
    <p>
      <img src="abc" alt="yeah no clue" /> lorem ipsum and stuff, it is very
      common ya know
    </p>
    <button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      Give Us Money
    </button>
  </>
);

const OurSponsors = () => (
  <>
    <h1>Our Sponsors</h1>
    <p>lorem ipsum and stuff, it is very common ya know</p>
    <div className="cards-grid row row-cols-4">
      <div className="logo-container col">
        <img src="meh" alt="logo here" />
      </div>
      <div className="col">
        <img src="meh" alt="logo here" />
      </div>
      <div className="col">
        <img src="meh" alt="logo here" />
      </div>
      <div className="col">
        <img src="meh" alt="logo here" />
      </div>
    </div>
  </>
);
