import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Earth"
            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Gopal1252");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }

    render(){
        const {name,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card flex">
                <img className="rounded-full h-20" src={avatar_url} />
                <div className="ml-2">
                    <h2>Name: {name}</h2>
                    <h3>Location: Earth</h3>
                    <h4>Contact: @gopal1252</h4>
                </div>
            </div>
        )
    }
}

export default UserClass;