import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from "../features/auth/authSlice";
import Modal from '../components/Modal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify'

export default function Dashboard() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [modalVisible, setModalVisible] = useState(false)
    const { user } = useSelector((state)=>state.auth) 
    useEffect(() => {
        if (!user) {
            navigate('login')
        }
    })
    return <>
        <div className="overflow-clip w-full items-center justify-center flex flex-col">
            <p className="w-full text-6xl mb-20 text-center">Dashboard</p>
            {/* subject list */}
            <div onClick={()=>dispatch(getAllUser())} className="text-xl py-2 px-6 space-x-4 w-full max-w-md items-center justify-between flex hover:bg-slate-600 hover:cursor-pointer bg-slate-700 rounded-3xl shadow-lg mb-4">
                <p>Click me</p>
            </div>
        </div>
        <Modal modalVisible={modalVisible} modalClose={()=>setModalVisible(false)}>
            asdasd
        </Modal>
    </>
}