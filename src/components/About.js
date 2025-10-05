import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("parent didmount");
  }

  render() {
    //console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>welcome to About </h2>
        <UserClass name={"karthik"} location={"kakinada"} />
      </div>
    );
  }
}

export default About;
