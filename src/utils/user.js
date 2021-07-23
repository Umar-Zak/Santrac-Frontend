import htpp from "./http"
import jwt_decode from "jwt-decode"
import {toast} from "react-toastify"
export async function login(body) {
    
    try {
        const { data } = await htpp.post("/users/login", body)
        localStorage.setItem("token", data)
        const user = jwt_decode(data)
        toast("You are successfully logged in")
        if(user.isAdmin) return window.location="/dashboard"
        
        window.location = "/"
    }
    catch (ex) {
        throw ex
    }
}

export async function register(body) {
    try {
        const { data } = await htpp.post("users/register", body)
        localStorage.setItem("token", data)
        toast("You are successfully registered")
        window.location="/"
    }
    catch (ex) {
        throw ex
    }
}