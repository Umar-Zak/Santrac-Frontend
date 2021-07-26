import firebase from "firebase"
 import {toast} from "react-toastify"


const config = {
    apiKey: "AIzaSyA2rVDH_3zybnpP6jW83VgGZ5KJXQxoN6Y",
    authDomain: "santrac-4d523.firebaseapp.com",
    projectId: "santrac-4d523",
    storageBucket: "santrac-4d523.appspot.com",
    messagingSenderId: "1038008546460",
    appId: "1:1038008546460:web:5524ec4e1c738f4e4c6959",
    measurementId: "G-XYMXNWY90B"
}

firebase.initializeApp(config)

const storage=firebase.storage()

export async function uploadFile(file) {
    try {
        const ref = storage.ref()
        const task = ref.child(file.name).put(file, { contentType: file.type })
    
        const url = await task.snapshot.ref.getDownloadURL()
        return url
    }
    catch (ex) {
        toast("An error occured while uploading your image. Please try again")
    }
     
}