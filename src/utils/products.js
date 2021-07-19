const products=[
    { _id: 1,name:"Tile cement",price:230,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 2,name:"Chisel",price:830,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 3,name:"Hammer",price:90,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 4,name:"Iron rods",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 5,name:"Pavement blocks",price:300,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 6,name:"master lock",price:600,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 7,name:"Azar oil paint",price:200,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 8,name:"Tape measure",price:240,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 9,name:"binding wire",price:350,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 10,name:"metal door",price:400,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 11,name:"Nails",price:213,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" },
    { _id: 12,name:"brush",price:40,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.",image:"https://picsum.photos/320/320" }
]

const hotProducts = [
     { _id: 1,name:"Wall tiles",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://picsum.photos/320/320" },
     { _id: 2,name:"emulsion paint",price:200,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://picsum.photos/320/320" },
     { _id: 3,name:"azar oil paint",price:1300,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://picsum.photos/320/320" },
     { _id: 4,name:"aluminium windows",price:500,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus",image:"https://picsum.photos/320/320" },
]

export  function getAllProducts() {
    return [...products]
}

 export function getProductById(id) {
    const product = products.find(p => p._id.toString() === id)
    return product
}

export function getHotProducts() {
    return [...hotProducts]
}


export function getHighlightProduct() {
    return products.slice(2,6)
}