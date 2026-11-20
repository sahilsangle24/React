import React from "react";
import Function from "./components/Function";
import Arrowfunction from "./components/arrowfunction";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello I'm App Component</h1>
        <Function />
        <Arrowfunction></Arrowfunction>
      </div>
    );
  }
}

export default App;