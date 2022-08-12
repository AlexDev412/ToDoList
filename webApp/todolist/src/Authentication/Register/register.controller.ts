import { AxiosResponse, AxiosError } from "axios";
const axios  = require('axios');

const RegisterController  = async (username: string, password: string) => {
    var response = null;
    try {
        response = await axios.post('http://127.0.0.1:8080/register',
        {username: username, password: password},
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        },)
        .then((response : AxiosResponse<any, any>) => {
            return (response);
        })
        .catch((error : AxiosError<any, any>) => {
            response = error.response;
            return (error.response?.data);
        })
    } catch (error) {
            console.log(error);
        }
    return (response);
}

export default RegisterController;