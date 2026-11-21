import react from "react";

class WelcomeMsg extends react.Component{
    render(){
            <h1>console.log{this.props}</h1>

        return(
            <>
            <h1>welcome {this.props.username} </h1><br />
            <h2>Email : {this.props.email}</h2>
            <h2>Place :{this.props.place}</h2>
            <h2>Mobile No: {this.props.mobileNo}</h2>

            </>
        )
    }
}
export default WelcomeMsg;