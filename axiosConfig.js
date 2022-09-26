import axios from "axios";

// const api = axios.create()
// // const api = axios.create({
// //     method: 'get',
// //     baseURLurl: 'https://mern-backend-test.onrender.com/api/',
// //     url: 'users',
// //     headers: {
// //     }
// // })
// api.defaults.baseURL = 'https://acc-attendance-backend.onrender.com/api/';
// // api.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// // api.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// export default api

axios.defaults.baseURL = 'https://acc-attendance-backend.onrender.com/api/';
export default axios.create()