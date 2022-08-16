import React from "react";
import FormLogin from "./component/index";
import LoginController from "./login.controller";
import History from "../../Navigation/historyNavigation";
import AppRoutes from '../../Navigation/route';
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
    
    handleClick = async () => {
        let response = await LoginController(this.state.username, this.state.password);
        console.log(response);
        if (response.status === 200) {
            History.push(AppRoutes.Board);
        } else {
            alert(response.msg);
        }
    }
    
    render() {
        return (
            <FormLogin
                username={this.state.username}
                password={this.state.password}
                handleInputUsername={(input) => this.handleOnChangeUsername(input)}
                handleInputPassword={(input) => this.handleOnChangePassword(input)}
                handleClick={() => this.handleClick()}
            />
        );
    }
}

export default LoginComponent;