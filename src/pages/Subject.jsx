import { useState } from 'react';
import Modal from '../components/Modal';
export default function Subject() {
    const [modalVisible, setModalVisible] = useState(false)
    return <>
        <div className="overflow-clip w-full items-center justify-center flex flex-col">
            <table>
                <tbody>
                    <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                </tbody>
            </table>
            {/* <p className="w-full text-6xl mb-20 text-center">Subjects</p>
            <div onClick={() => { setModalVisible(true)}} className="text-xl py-2 px-6 w-full max-w-md items-center justify-between flex hover:bg-slate-600 hover:cursor-pointer bg-slate-700 rounded-3xl shadow-lg mb-4">
                <p>Computer Programming</p>
                <p>BSIT IV</p>
            </div> */}
        </div>
        <Modal modalVisible={modalVisible} modalClose={() => setModalVisible(false)}>
            Subject child
        </Modal>
    </>
}