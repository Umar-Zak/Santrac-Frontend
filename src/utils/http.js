import axios from "axios"

const instance=axios.create({
    baseURL: "https://santrac.herokuapp.com/",
    headers:{"x-auth-token":localStorage.getItem("token")}
})


export default {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete:instance.delete
}