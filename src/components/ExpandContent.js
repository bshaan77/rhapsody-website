import React, { useState } from "react";
import { BsCaretRight } from "react-icons/bs";
import { truncate } from '../helpers'
import "./ExpandContent.css";

const ExpandContent = (props) => {
  const [toggle, setToggle] = useState(-1);

  return (
    <div className="container" onClick={() => setToggle((toggle + 1) % 2)}>
      <div className="d-flex justify-content-between">
        <TextContent 
            open={toggle} 
            image={props.image}
            title={props.title}
            description={props.description}
            content={props.content}
          />
        <ToggleButton rotate={toggle} />
      </div>
    </div>
  );
};

const TextContent = (props) => {
  const isOpen = props.open % 2 === 0;

  return (
    <div className="text-container">
      {isOpen && props.image && <img src={props.image} />}
      <h1>{props.title && props.title}</h1>
      {props.description && <p className="font-italic">{props.description}</p>}
      <p className="text-muted">
        {props.content && isOpen ? props.content : truncate(props.content)}
      </p>
    </div>
  );
};
const ToggleButton = (props) => (
  <div
    className="toggle-background float-right rounded-circle align-self-center"
    rotate={props.rotate}
  >
    <div className="toggle-icon-wrapper" type="checkbox">
      <BsCaretRight size="lg" />
    </div>
  </div>
);

export default ExpandContent;
