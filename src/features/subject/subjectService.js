import axios from 'axios'
function api(url) {
    return 'https://mern-backend-test.onrender.com/api/' + url
    // return 'http://localhost:5000/api/' + url
}
const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const getSubjects = async (token) => {
    const data = await axios.get(api('subjects'), config(token))
        .then((res) => {
            return res.data
        })
    return data
}
const getSubject = async (data, token) => {
    const res = await axios.get(api(`subjects/${data.subjectId}`), config(token))
        .then((res) => {
            return res.data
        })
    return res

}
const addSubject = async (data, token) => {
    await axios.post(api('subjects'), data, config(token))
    return await getSubjects(token)
}
const scanID = async (data, token) => {
    await axios.post(api('attendance/'), data, config(token))
    return await getSubjects(token)
}

const subjectService = {
    getSubjects,
    getSubject,
    addSubject,
    scanID
}

export default subjectService