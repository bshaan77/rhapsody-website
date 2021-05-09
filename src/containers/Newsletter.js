import React from "react";
import "./Newsletter.css";
import ExpandContent from "../components/ExpandContent";

//mock content
// mock content, connect to google sheets api later
import { newsletter } from "../mocks/content";

const Newsletter = () => {
  return (
    <>
    <div className="container">
      <div className="header-container">
        <div>
          <h1>Newsletter</h1>
          <p>Description of the cool newsletter</p>
        </div>
      </div>
      <ContentContainer />
    </div>
    </>
  );
};

/**
        author: 'April & May',
        date: 'May & April 2021',
        issue: 14,
        content: {
            image: 'teaser image',
            title: 'very cool newsletter'
            text: 'loremloremlorem u know da drill'
        }
*/

const ContentContainer = () => {
  return newsletter.map((n) => (
    <ExpandContent
      image={n.content.image}
      title={n.content.title}
      description={`By ${n.author}, issue #${n.issue}, ${n.date}`}
      content={n.content.text}
    />
  ));
};

export default Newsletter;
