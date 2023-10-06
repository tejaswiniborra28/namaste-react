import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react series</h2>
        {/* <User name={"Tejaswini (function)"} /> */}
        <UserClass name={"Tejaswini (class)"} location={"Hyderabad"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react series</h2>
//       {/* <User name={"Tejaswini (function)"} /> */}
//       <UserClass name={"Tejaswini (class)"} location={"Hyderabad"} />
//     </div>
//   );
// };

export default About;
