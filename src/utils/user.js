import htpp from "./http"
import jwt_decode from "jwt-decode"

export async function login(body) {
    
    try {
        const { data } = await htpp.post("/users/login", body)
        localStorage.setItem("token", data)
        const user = jwt_decode(data)
        if(user.isAdmin)window.location="/dashboard"
        
        else window.location = "/"
    }
    catch (ex) {
        throw ex
    }
}

export async function register(body) {
    try {
        const { data } = await htpp.post("users/register", body)
        localStorage.setItem("token", data)
        window.location="/"
    }
    catch (ex) {
        throw ex
    }
}