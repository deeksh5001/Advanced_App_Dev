import axios from "axios";

const URL = 'http://localhost:7777/api';
const LogIn = (email,password) => axios.post(URL + '/auth/login', { email,password })
const SignUp = (name,email,password,phone) => axios.post(URL + '/auth/register', { name,email,password,phone});

export {LogIn,SignUp}