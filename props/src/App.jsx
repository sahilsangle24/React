import React from "react";
import WelcomeMsg from "./components/WelcomeMsg";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Props management</h1>

        <br /><br />
        <WelcomeMsg
          username="Sahil"
          email="sahilsangale024@gmai.com"
          place="Nashik"
          mobileNo={9604249733}
        />

         <WelcomeMsg
          username="Darshan"
          email="Darshansangale024@gmai.com"
          place="Kalyan"
          mobileNo={9604249733}
        />

        <WelcomeMsg
          username="Manya"
          email="surve024@gmai.com"
          place="Pune"
          mobileNo={9604249733}
        />
      </>
    );
  }
}
export default App;
