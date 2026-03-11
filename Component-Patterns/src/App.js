import "./App.css";
import HeadlessUIExample from "./Components/HeadlessUI";
import RenderPropsExample from "./Components/RenderProps";
import CompoundCardExample from "./Components/Compound";

function App() {
  return (
    <div className="App main-app-container">
      <h1 className="main-title">React Component Patterns Examples</h1>
      <hr className="divider" />

      <div className="example-section">
        <h2>Headless Component Pattern</h2>
        <p className="example-description">
          This pattern separates the state/logic from the UI by using custom
          hooks or components that return no DOM elements (they are "headless").
        </p>
        <p className="example-description">
          By extracting the core behavior into a headless hook, you can build
          completely different visual representations that share the exact same
          underlying logic.
        </p>
        <HeadlessUIExample />
      </div>
      <hr className="divider" />

      <div className="example-section">
        <h2>Render Props Pattern</h2>
        <p className="example-description">
          This pattern handles shared state and calculates information passing
          it to children. We can use the SAME component multiple times, passing
          completely different UIs to its `render` prop!
        </p>
        <RenderPropsExample />
      </div>
      <hr className="divider" />

      <div className="example-section">
        <h2>Compound Components Pattern</h2>
        <p className="example-description">
          This pattern allows multiple components to work together effectively,
          using a parent component to manage and coordinate shared state or UI
          boundaries among its predefined child components.
        </p>
        <CompoundCardExample />
      </div>
    </div>
  );
}

export default App;
