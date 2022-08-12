import React from 'react';
import FormRegister from "./component/index";
import RegisterController from "./register.controller";
import History from "../../Navigation/historyNavigation";
import AppRoutes from '../../Navigation/route';
class RegisterComponent extends React.Component {
    state =  {
        username: '',
        password: '',
        confirmPassword: '',
    };

    handleOnChangeUsername = (input : any) => {
        this.setState({ username: input.target.value});
    }

    handleOnChangePassword = (input : any) => {
        this.setState({ password: input.target.value})
    }

    handleClick = async () => {
        var response = await RegisterController(this.state.username, this.state.password);
        if (response.status === 200) {
            History.push(AppRoutes.Login)
        } else {
            alert(response.msg);
        }
    }

    render() {
        return (
            <FormRegister 
                username={this.state.username}
                password={this.state.password}
                handleInputUsername={(input) => this.handleOnChangeUsername(input)}
                handleInputPassword={(input) => this.handleOnChangePassword(input)}
                handleClick={() => this.handleClick()}
            />
        );
    }
}

export default RegisterComponent;