function CollegeInfo(props){
    return(
        <>
        <h1>DETAILS</h1>
        <div>

        <h1>College Details</h1>
        <p>College Name : {props.college.name}</p>
        <p>Location: {props.college.location}</p>
        <p>University: {props.college.university}</p>


         <h1>Student Details</h1>
        <p>{props.student.name1}</p>
        <p> {props.student.name2}</p>
        <p>{props.student.name3}</p>


         <h1>Teacher Information</h1>

      <p>Name: {props.teacher.name}</p>
      <p>Subject: {props.teacher.subject}</p>
      <p>Experience: {props.teacher.experience}</p>
        </div>
        </>
    );
}
export default CollegeInfo;