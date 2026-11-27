import React from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import Functionprops from "./components/Functionprops";

class App extends React.Component {
  render() {
    let productinfo =["watch","Car","bike"];
   let demo = {
  name: "Sahil",
  age: 22,
  city: "Nashik"
};
    return (
      <>
        {/* <h1>Props management</h1>

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
        /> */}

        <Functionprops UserName="sahil" array={productinfo} demo={demo}/>
      </>
    );
  }
}
export default App;
