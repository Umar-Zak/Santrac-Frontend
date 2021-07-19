import htpp from "./http"


export async function login(body) {
    
    try {
        const { data } = await htpp.post("/users/login", body)
        localStorage.setItem("token", data)
        window.location="/"
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