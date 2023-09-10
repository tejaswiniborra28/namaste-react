/*
*
*   <div id="parent">
*    <div id="child">
*    <h1> hello </h1>
*    </div>
*    </div>
ReactElement(object) => HTML(Browser understands)
*
*/
// React elements nothing but js object and render converts react elements to the html elements which browser understands
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hello world!")
//   )
// );

//////////////////////////////////////////////////////////////

/*
*
*   <div id="parent">
*    <div id="child">
*    <h1> i am h1 tag </h1>
 <h2> i am h2 tag </h2>
*    </div>
*    </div>
ReactElement(object) => HTML(Browser understands)
*
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am h1 tag!"),
//     React.createElement("h2", {}, "I am h2 tag!"),
//   ])
// );

//////////////////////////////////////////////////////////////

/*
*
*   <div id="parent">
*    <div id="child1">
*          <h1> i am h1 tag 1</h1>
           <h2> i am h2 tag 2</h2>
*    </div>
      <div id="child2">
*          <h1> i am h1 tag 1</h1>
           <h2> i am h2 tag 2</h2>
*    </div>
*    </div>
ReactElement(object) => HTML(Browser understands)
*
*/
import React from 'react';
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i am h1 tag!"),
    React.createElement("h2", {}, "I am h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag!"),
    React.createElement("h2", {}, "I am h2 tag!"),
  ]),
]);
console.log(parent); // object

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
