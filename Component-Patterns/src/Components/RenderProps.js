import React, { useState } from "react";

// 1. A reusable component with its own UI text, state logic, and calculated info
function Tile({ render }) {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev + 1);

  // Calculate some information derived from the state
  const isEven = clickCount % 2 === 0;
  const message = clickCount >= 5 ? "You clicked a lot!" : "Keep clicking!";

  return (
    <div className="tile-logic-container">
      <h3 className="tile-header">I am the generic Tile component logic</h3>
      <p className="tile-subheader">
        (Here is some basic text inside the Tile itself)
      </p>

      {/* 2. Call the `render` prop passing state, actions, and calculated info */}
      <div className="tile-render-content">
        {render({ clickCount, increment, isEven, message })}
      </div>
    </div>
  );
}

// 3. Usage Example showing how reusable the Tile is
export default function RenderPropsExample() {
  return (
    <div className="tiles-wrapper">
      {/* Use Case 1: Simple Counter */}
      <Tile
        render={({ clickCount, increment }) => (
          <div className="tile-instance simple-counter-tile">
            <h4>First render prop (Simple Counter)</h4>
            <button className="btn btn-primary" onClick={increment}>
              Clicks: {clickCount}
            </button>
          </div>
        )}
      />

      {/* Use Case 2: Displaying Calculated Info */}
      <Tile
        render={({ clickCount, increment, isEven, message }) => (
          <div className="tile-instance calculated-info-tile">
            <h4>Second render prop (Using Calculated Info)</h4>
            <button className="btn btn-secondary" onClick={increment}>
              Add Click
            </button>
            <div className="tile-stats">
              <p>
                Total Clicks: <strong>{clickCount}</strong>
              </p>
              <p>
                Is the number even? <strong>{isEven ? "Yes!" : "No"}</strong>
              </p>
              <p className="tile-message">{message}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
}
