import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass.js";
import ProfileFunctionalComponent from "./Profile.js";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructer");
  }

  componentDidMount() {
    // console.log(" parent component");
  }
  render() {
    // console.log(" parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 -Finding the Path 🚀
        </p>
        {/* <ProfileFunctionalComponent name={"Faraz"} /> */}
        <Profile name={"First child"} />
      </div>
    );
  }
}
export default About;
