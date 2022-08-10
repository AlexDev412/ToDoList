import { AxiosResponse, AxiosError } from "axios";
const axios  = require('axios');

const  RegisterController  = async (username: string, password: string) => {
    try {
        await axios.post('http://127.0.0.1:8080/register',
        {username: username, password: password},
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        },)
        .then((response : AxiosResponse<any, any>) => {
            console.log(response.data);
            //change route here
        })
        .catch((error : AxiosError<any, any>) => {
            alert(error.response?.data.msg)
            console.log(error.response?.data.msg)
        })
    } catch (err) {
        console.log(err)
    }
}

export default RegisterController;