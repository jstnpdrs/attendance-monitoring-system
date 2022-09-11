import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from "../features/auth/authSlice";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
            dispatch(reset())
        }
        if (isSuccess) {
            navigate('/')
            toast.success('Welcome!')
            dispatch(reset())
        }
        if (user) {
            navigate('/')
        }

    }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])

    const [userData, setUser] = useState({
        fullName: '',
        username: '',
        password: '',
        password2: '',
    })

    const { fullName, username, password } = userData
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (username && fullName && password && userData.password2) {
            if (password !== userData.password2) {
                toast.error('Passwords do not match')
            } else {
                dispatch(register({
                    fullName,
                    username,
                    password
                }))
                // navigate('/')
                // toast.success('Welcome!')
            }
        } else {
            toast.error('Please fill all fields')
        }
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
            <p className="w-full text-6xl mb-20 text-center">Register</p>
            <form onSubmit={onSubmit} className='flex flex-col space-y-2 text-black'>
                <input type="text" name="fullName" id="fullName" placeholder='Name' value={userData.fullName} onChange={ onChange }/>
                <input type="text" name="username" id="username" placeholder='Username' value={userData.username} onChange={ onChange }/>
                <input type="password" name="password" id="password" placeholder='Password' value={userData.password} onChange={ onChange } />
                <input type="password" name="password2" id="password2" placeholder='Confirm Password' value={userData.password2} onChange={ onChange }/>
                <button className='bg-black rounded-md text-white p-2'>Test</button>
            </form>
        </div>
    </>
}