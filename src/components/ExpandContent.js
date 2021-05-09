import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './ExpandContent.css';

// function ExpandContent() {
//   return (
//     <div className="container">
//       <Accordion defaultActiveKey="1">
//         <Card>
//           <Card.Header>
//             <Accordion.Toggle as={Button} variant="link" eventKey="0">
//               Click me!
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>Hello! I'm the body</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//     </div>
//   );
// }

import { BsCaretRight } from "react-icons/bs";

const ExpandContent = () => (
  <div className="container">
    <div className="toggle-button-wrapper float-right rounded-circle">
      <BsCaretRight />
    </div>

  </div>
);

export default ExpandContent;