import React from "react";
import Card from "./Widgets";

export default function CompoundCardExample() {
  return (
    <div className="compound-example-container">
      {/* Example 1: Full Card */}
      <Card>
        <Card.Header title="User Profile" />
        <Card.Body>
          <p className="card-text">
            <strong>Name:</strong> Jane Doe
          </p>
          <p className="card-text">
            <strong>Role:</strong> Product Manager
          </p>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Save</button>
        </Card.Footer>
      </Card>

      {/* Example 2: Partial Card (No Footer, different configuration) */}
      <Card>
        <Card.Header title="Notice" />
        <Card.Body>
          <p>
            Please remember to update your passwords by the end of the month.
          </p>
        </Card.Body>
        {/* Footer is omitted here */}
      </Card>
    </div>
  );
}
