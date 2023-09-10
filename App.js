import React from "react";
import ReactDOM from "react-dom/client";

//jsx-- Html like or Xml like syntax
// jsx => React.createElement => React element (js object) => HTML elememt ( render )

// ---- single line-----
// const jsxHeading = <h1 id="heading">Nameste React</h1>;

//--- multi line-----
const Heading = (
  <h1 className="heading" tabIndex="5">
    Nameste React
  </h1>
);

const Title = () => <h1 className="title">Namaste react title</h1>;

// React Functional components -- normal js func which returns jsx or react elements
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {Title()}
      {console.log("nameste react console")}
      <h1>Namaste react functional component</h1>
    </div>
  );
};
console.log(Heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// RENDERing react element
root.render(Heading);

// rendering react component
root.render(<HeadingComponent />);
