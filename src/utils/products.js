import { toast } from "react-toastify"
import http from "./http"
const hotProducts = [
     { _id: 1,name:"Wall tiles",price:120,description:"The most advanced cloud database on the market, with unmatched data distribution",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/wale-tile.jpg?alt=media&token=cedab714-8a30-474a-b0d4-01abebecf769" },
     { _id: 2,name:"emulsion paint",price:200,description:"Run MongoDB on-premises or in your private & hybrid cloud environments",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/emulsion-paint.png?alt=media&token=d62405c8-d442-454e-a6bc-edea33d6b90c" },
     { _id: 3,name:"azar oil paint",price:1300,description:"Radically simplify your data infrastructure with an application data ",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/azar.jpg?alt=media&token=74acaf8b-1a9a-4fe4-8a4b-d0327d407d9b" },
     { _id: 4,name:"aluminium windows",price:500,description:"MongoDB’s document data model naturally supports JSON and its express",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/al-windows.jpg?alt=media&token=8bdbb182-1ffc-43f9-9e91-599fedfbe909" },
]

export async function getAllProducts() {
    try {
        const { data } = await http.get("products/all")
        return data
    } catch (ex) {
        throw ex
    }
}

 export async function getProductById(id) {
     try {
         const { data } =await http.get(`products/get/${id}`)
         return data
     }
     catch (ex) {
         throw ex
     }
}

export function getHotProducts() {
    return [...hotProducts]
}


export function getHighlightProduct() {
    // return products.slice(2,6)
}


export function addTocart(product) {
    let cart = localStorage.getItem("cart")
    if (!cart) {
        cart = [{...product,quantity:1,amount:product.price}]
        localStorage.setItem("cart",JSON.stringify(cart))
        return
    }
    cart = JSON.parse(cart)
    const index = cart.findIndex(p => p._id === product._id)
    if (index < 0) {
        cart = [...cart, {...product,quantity:1,amount:product.price}]
        localStorage.setItem("cart",JSON.stringify(cart))
        return
    }

    const item = cart[index]
    item.quantity = item.quantity + 1
    item.amount = item.quantity * item.price
    cart[index] = item
    localStorage.setItem("cart",JSON.stringify(cart))
}


export async function order(body) {
    try {
        await http.post("orders/", body)
        toast("Thanks for your order. You'll be contacted soon")
        localStorage.setItem("cart",JSON.stringify([]))
    }
    catch (ex) {
        throw ex
    }
}

export async function getAllCategories() {
    try {
        const { data } = await http.get("products/all/categories")
        return data
    }
    catch (ex) {
        throw ex
    }
}

export async function addCategory(body){
    try {
        const { data } = await http.post("products/add/categories", body)
        return data
    }
    catch (ex) {
        throw ex
    }
}

export async function getAllOrders() {
    try {
        const { data } = await http.get("orders/")
        return data
    }
    catch (ex){
        throw ex
    }
}

export async function updateCategory(id, body) {
    try {
        const { data } = await http.put(`products/category/${id}`, body)
        return data
    }
    catch (ex) {
        throw ex
    }
}


export async function addProduct(body) {
    try {
        const data = await http.post("products/add", body)
        return data
    }
    catch (ex) {
        throw ex
    }
}


export async function updateProduct(id, body) {
    try {
        const { data } = await http.put(`products/${id}`, body)
        return data
    }
    catch (ex) {
        throw ex
    }
}