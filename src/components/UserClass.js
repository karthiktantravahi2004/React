// class based compnent of about us User()
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //  console.log("Child constructor");

    this.state = {
      userInfo: {
        name: "Joe",
        location: "default",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }
  async componentDidMount() {
    //console.log(this.props.name + "Child dimount");
    const data = await fetch(
      "https://api.github.com/users/karthiktantravahi2004"
    );

    const json = await data.json();

    this.setState({ userInfo: json });
  }

  render() {
    //console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name} </h2>
        <h2>Location : {location} </h2>
        <h2>Contact : @karthik_tantravahi</h2>
      </div>
    );
  }
}

export default UserClass;
