import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    console.log("child constructor");
  }

  // api call in class component
  async componentDidMount() {
    console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log("json", json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count, count2 } = this.state;
    console.log("child render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        {/* <h1>count = {count}</h1>
        <h1>count = {count2}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increment
        </button> */}
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: @tejaswini28</h4>
      </div>
    );
  }
}

export default UserClass;
