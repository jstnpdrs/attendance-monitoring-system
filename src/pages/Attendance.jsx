import { useState } from 'react';
import Modal from '../components/Modal';
export default function Attendance() {
    const [modalVisible, setModalVisible] = useState(false)
    return <>
        <div className="overflow-clip w-full items-center justify-center flex flex-col">
            <p className="w-full text-6xl mb-20 text-center">Subjects</p>
            <div onClick={() => { setModalVisible(true)}} className="text-xl py-2 px-6 w-full max-w-md items-center justify-between flex hover:bg-slate-600 hover:cursor-pointer bg-slate-700 rounded-3xl shadow-lg mb-4">
                <p>Computer Programming</p>
                <p>BSIT IV</p>
            </div>
        </div>
        <Modal modalVisible={modalVisible} modalClose={() => setModalVisible(false)}>
            Subject child
        </Modal>
    </>
}