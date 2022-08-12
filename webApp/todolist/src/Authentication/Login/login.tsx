import React from "react";
import FormLogin from "./component/index";

class LoginComponent extends React.Component{
    state = {
        username: '',
        password: '',
    };

    handleOnChangeUsername = (input : any) => {
        this.setState({username: input.target.value});
    }

    handleOnChangePassword = (input : any) => {
        this.setState({password: input.target.value});
    }

    handleClick = () => {
        console.log(this.state.username, this.state.password);
    }

    render() {
        return (
            <FormLogin
                username={this.state.username}
                password={this.state.password}
                handleInputUsername={(input) => this.handleOnChangeUsername(input)}
                handleInputPassword={(input) => this.handleOnChangePassword(input)}
                handleClick={() => this.handleClick}
            />
        );
    }
}

export default LoginComponent;