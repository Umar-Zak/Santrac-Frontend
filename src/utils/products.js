import { FaExclamation } from "react-icons/fa"
import http from "./http"
const products = [
    { _id: 1,name:"Tile cement",price:230,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/tile-cement.jpg?alt=media&token=83c8d8fb-0bb1-47c5-99b6-b901b25795ea" },
    { _id: 2,name:"Chisel",price:830,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/chisel.jpg?alt=media&token=203266fd-68c3-46c3-a226-b9cc43ea4e04" },
    { _id: 3,name:"Hammer",price:90,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/hammer.jpg?alt=media&token=c3082861-e533-4ac7-b61d-069d79247733" },
    { _id: 4,name:"Iron rods",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/rods.jpg?alt=media&token=8483b5f0-7f78-4b6f-a966-3bfa00fbadc1" },
    { _id: 5,name:"Pavement blocks",price:300,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/block.jpg?alt=media&token=5a5bbf5a-d789-4a52-a40b-36947a8b22dc" },
    { _id: 6,name:"master lock",price:600,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/lock.jpg?alt=media&token=c58de806-5720-45b8-bd45-9fe2f3adef86" },
    { _id: 7,name:"Azar oil paint",price:200,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/azar.jpg?alt=media&token=74acaf8b-1a9a-4fe4-8a4b-d0327d407d9b" },
    { _id: 8,name:"Tape measure",price:240,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/tape%20measure.jpg?alt=media&token=866352f7-f54e-4edf-b3c4-50650886f10f" },
    { _id: 9,name:"binding wire",price:350,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/wire.jpg?alt=media&token=93842946-0199-4f87-856c-c6e43205834c" },
    { _id: 10,name:"metal door",price:400,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/metal-door.jpg?alt=media&token=4b3fc171-c5c2-455d-9130-ab523ddb37af" },
    { _id: 11,name:"Nails",price:213,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/nail.jpg?alt=media&token=3d2868c5-5eaa-4fe0-9928-791a454e8238" },
    { _id: 12,name:"brush",price:40,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/brush.jpg?alt=media&token=54e54520-497b-4177-8701-a980b71465bb" }
]

const hotProducts = [
     { _id: 1,name:"Wall tiles",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/wale-tile.jpg?alt=media&token=cedab714-8a30-474a-b0d4-01abebecf769" },
     { _id: 2,name:"emulsion paint",price:200,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/emulsion-paint.png?alt=media&token=d62405c8-d442-454e-a6bc-edea33d6b90c" },
     { _id: 3,name:"azar oil paint",price:1300,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/azar.jpg?alt=media&token=74acaf8b-1a9a-4fe4-8a4b-d0327d407d9b" },
     { _id: 4,name:"aluminium windows",price:500,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://firebasestorage.googleapis.com/v0/b/northlinc-51fbb.appspot.com/o/al-windows.jpg?alt=media&token=8bdbb182-1ffc-43f9-9e91-599fedfbe909" },
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
    return products.slice(2,6)
}