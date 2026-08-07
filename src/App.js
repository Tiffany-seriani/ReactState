import React, { Component } from "react";
import profile from "./components/Profile";

class App extends Component {


  constructor() {
    super();

    this.state = {
      name: "Seriani",
      bio: "I am an aspiring full-stack software developer currently studying at GomyCode Nairobi. Furthermore, I also bake as a side hustle. I offer a variety of cinnamon roll flavors. My goal is to become impactful as I am constantly expanding my creative and technical skills."
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.bio}</p>
      </div>
    );
  }
}

export default App;
