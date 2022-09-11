import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from "../features/auth/authSlice";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
            dispatch(reset())
        }
        if (isSuccess) {
            navigate('/');
            toast.success('Welcome!');
            dispatch(reset())
            
        }
        if (user) {
            navigate('/')
        }

    }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])

    const [userData, setUser] = useState({
        username: '',
        password: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (!userData.username && !userData.password) {
                toast.error('Please fill all fields')
                return
            }
        dispatch(login(userData)) 
    }
    const onChange = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }
    return <>
        <div className="bg-indigo-900 p-10 overflow-clip m-auto items-center justify-center flex flex-col">
            <p className="w-full text-6xl mb-20 text-center">Login</p>
            <form onSubmit={onSubmit} className='flex flex-col space-y-2 text-black'>
                <input type="text" name="username" id="username" placeholder='Username' value={userData.username} onChange={ onChange }/>
                <input type="password" name="password" id="password" placeholder='Password' value={userData.password} onChange={ onChange } />
                <button className='bg-green-900 rounded-md'>Test</button>
            </form>
        </div>
    </>
}