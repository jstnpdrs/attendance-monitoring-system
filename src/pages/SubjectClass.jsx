import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../components/Modal';
export default function SubjectClass() {
    const navigate = useNavigate()
    const [modalVisible, setModalVisible] = useState(false)
    const modalOpen = () => {
        setModalVisible(true)
    }
    const modalClose = () => {
        setModalVisible(false)
    }
    return <>
        <div className="overflow-clip w-full items-center flex flex-col p-5">
            <div className='flex w-full justify-between'>
                <p onClick={()=>navigate(-1)} className="hover:cursor-pointer">{ "< Back" }</p>
                <p>test : { useParams().id }</p>
            </div>
            <div className="w-full text-4xl mb-5 mt-20 flex max-w-4xl">
                <p className="w-full">Web Development BSIT-IV</p>
                <button onClick={modalOpen} className="bg-green-800 py-2 px-4 active:bg-green-900 rounded-lg text-sm flex-none">Add Student</button>
            </div>
            
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full max-w-4xl">
                <table className="w-full text-sm text-left text-gray-200">
                    <thead className="text-gray-200 bg-gray-50 dark:bg-gray-600">
                        <tr>
                            <td scope="col" className="py-3 px-6">
                                Name
                            </td>
                            <td scope="col" className="py-3 px-6">
                                Class
                            </td>
                            <td scope="col" className="py-3 px-6 text-center">
                                Total Students
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 hover:cursor-pointer dark:hover:bg-gray-500">
                            <td scope="row" className="py-4 px-6 whitespace-nowrap">
                                Student 1
                            </td>
                            <td className="py-4 px-6">
                                BSIT - IV
                            </td>
                            <td className="py-4 px-6 text-center">
                                34
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Modal modalVisible={modalVisible} modalClose={modalClose} fullscreen={false}>
            <div className="m-4 space-y-4 p-10 flex flex-col">
                <p className='text-5xl mb-2'>Add Student</p>
                <div className='flex flex-col'>
                    <label htmlFor="fullname">Student Name</label>
                    <input className="bg-gray-600 py-2 px-4 rounded-md" type="text" name="fullname" id="fullname" placeholder="Enter Student Name" required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="studentId">Student ID</label>
                    <input className="mb-5 bg-gray-600 py-2 px-4 rounded-md" type="text" name="studentId" id="studentId" placeholder="Enter Student ID" required />
                </div>
                {/* <div className='flex flex-col'>
                    <label htmlFor="class">Class</label>
                    <select className='bg-gray-600 text-gray-200 py-2 px-3 rounded-md' name="class" id="class" defaultValue=''>
                        <option value="" className='text-gray-400 p-2 text-lg' disabled>Select Class</option>
                        <option value="1" className='text-gray-200 p-2 text-lg'>BSIT - IV</option>
                        <option value="2" className='text-gray-200 p-2 text-lg'>BSBA - III</option>
                        <option value="3" className='text-gray-200 p-2 text-lg'>BSED - I</option>
                        <option value="4" className='text-gray-200 p-2 text-lg'>BSA - II</option>
                    </select>
                </div> */}
                <button className="bg-indigo-800 py-2 px-4 active:bg-indigo-900 rounded-md">Save</button>
            </div>
        </Modal>
    </>
}