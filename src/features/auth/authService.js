import axios from 'axios'
import { toast } from 'react-toastify'
const api = (url) => {
    // return 'https://mern-backend-test.onrender.com/api/' + url
    return 'http://localhost:5000/api/' + url
}

const getAllUser = async (userData) => {
    const response = await axios.get(api('users/'))
        .then((res) => {
            console.log(res.data);
            return res.data
        })
    toast.success('NICE')
    return response.data
}

const register = async (userData) => {
    const response = await axios.post(api('users'), userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(api('users/login'), userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    getAllUser,
    logout
}

export default authService