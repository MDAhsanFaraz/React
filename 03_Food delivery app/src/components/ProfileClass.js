import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
      },
    };
    console.log(" child Constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MDAhsanFaraz");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(" child componentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    console.log("did update");
  }
  render() {
    console.log("child render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.login}</h2>
      </div>
    );
  }
}

export default Profile;
