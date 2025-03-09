import React, { Component } from "react";
import profilePic from "../assest/mns.jpeg";

class Profile extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };

    // Bind 'this' to the toggle function
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // Correct way to update state
    this.setState((prevState) => ({
      displayBio: !prevState.displayBio
    }));
    console.log("Updated state:", this.state.displayBio); // This might not log immediately due to async state updates
  }

  render() {
    // const myStyle = { width: "200px", height: "200px", borderRadius: "100px", paddingTop:"10px" , margin: "10px"};
    // const btnStyle = { backgroundColor: "#483d8b", color: "white", fontSize: "18px" , borderRadius:"10px" ,  paddingTop:"" , margin: "10px", width: "25%",
    //   transition: "0.3s" , hover:{ opacity: "0.5"}};

    return (
      <div style={{margin:"30px"}}>
        <img src={profilePic} className="profile" alt="Profile Picture" />
        <h1 style={{display:"flex" , marginLeft:45}}>Hello,</h1>
        <h4>My name is Mansoor Gabali, I am a software engineer.</h4>
        <div>
        {this.state.displayBio ? (
          <div>
            <p>Aspiring in software engineering, development, and design.</p>
            <p>Full-Stack using Spring, React, Node.js, SQL, NoSQL</p>
            <button onClick={this.toggle} className="btn">Hide</button>
          </div>
        ) : (
          <button onClick={this.toggle} className="btn">Show more</button>

        )}
      </div>
      </div>
    );
  }
}

export default Profile;
