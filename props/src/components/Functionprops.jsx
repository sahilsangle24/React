let Functionprops = (props) => {
  return (
    <>
      <h1>this is props in functionprops</h1>
      <h2>welcome {props.UserName}</h2>
      <p>{props.array.map((value)=>
      <p>{value}</p>
    )}</p>
    <h2>{props.demo.name}</h2>
        <h2>{props.demo.age}</h2>
    <h2>{props.demo.city}</h2>

    </>
  );
};
export default Functionprops;
