import React from "react";

// Main Card container
const Card = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

// Card Header part
const CardHeader = ({ title }) => {
  return (
    <div className="card-header">
      <h3>{title}</h3>
    </div>
  );
};

// Card Body part
const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

// Card Footer part
const CardFooter = ({ children }) => {
  return <div className="card-footer">{children}</div>;
};

// Attach sub-components to the main Card component
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
