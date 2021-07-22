import axios from "axios"

const instance=axios.create({
    baseURL:  process.env.REACT_APP_API_URL,
    headers:{"x-auth-token":localStorage.getItem("token")}
})


export default {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete:instance.delete
}