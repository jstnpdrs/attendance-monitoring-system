import { useState, useRef, useEffect } from 'react';
import Modal from '../components/Modal';
export default function Attendance() {
    const [modalVisible, setModalVisible] = useState(false)
    const modalOpen = () => {
        setModalVisible(true)
    }
    const modalClose = () => {
        setModalVisible(false)
    }
    const handleSubmit = () => {
        e.preventDefault()
        console.log(studentId);
    }
    const [studentId, setStudentId] = useState('')
    const onChange = (e) => {
        setStudentId(e.target.value)
    }
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(e.code+' student id: '+e.target.value)
            setStudentId('')
        }
    }
    const focusDiv = useRef()
    return <>
        <div className="overflow-clip w-full items-center justify-center flex flex-col">
            <p className="w-full text-6xl mb-20 text-center">Subjects</p>
            <div onClick={() => { setModalVisible(true)}} className="text-xl py-2 px-6 w-full max-w-md items-center justify-between flex hover:bg-slate-600 hover:cursor-pointer bg-slate-700 rounded-3xl shadow-lg mb-4">
                <p>Computer Programming</p>
                <p>BSIT IV</p>
            </div>
        </div>
        <Modal modalVisible={modalVisible} modalClose={modalClose} fullscreen={true}>
            <div className="space-y-4 p-10 flex flex-col h-screen w-full">
                <p className='text-5xl m-auto'>Please scan your ID</p>
                <input
                    className='bg-transparent text-center active:ring-transparent focus:outline-0 caret-transparent text-transparent h-0'
                    // className='bg-transparent text-center active:ring-transparent focus:outline-0 border'
                    id="stundentId"
                    name="studentId"
                    type="text"
                    ref={focusDiv}
                    value={studentId}
                    onKeyPress={(e) => onEnter(e)}
                    onChange={onChange}
                    autoFocus
                    onBlur={()=>focusDiv.current.focus()}
                    autoComplete='off' />
            </div>
        </Modal>
    </>
}