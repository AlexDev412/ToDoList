import { AxiosResponse, AxiosError } from "axios";
const axios  = require('axios');

const LoginController = async (username: string, password: string) => {
    let response = null;
    console.log("here")
    try {
        response = await axios.post('http://localhost:8080/login', {
            username: username,
            password: password
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        },)
        .then((response: AxiosResponse) => {
            return (response);
        })
        .catch((error: AxiosError) => {
            response = error.response;
            return (error.response?.data);
        })
    } catch (error) {
        console.log(error);
    }
    return (response);
}

export default LoginController;