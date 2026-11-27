import { useState } from "react";
import CollegeInfo from "./components/CollegeInfo";

function App() {
  let college = {
    name: "vasantdada patil pratishthans college of engineering ",
    location: "mumbai",
    university: "mumbai university",
  };

  let student={
    name1 :"sahil sandeep sangale",
    name2: "darshan harak",
    name3:"numan kazi",
  };

 let teacher={
  name:"priya gupta ",
  subject:"physics",
  experience :"6 years",

 }

  return (
    <>
      <CollegeInfo college={college} student={student} teacher={teacher}/>
    </>
  );
}

export default App;
