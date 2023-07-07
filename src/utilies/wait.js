// import { resolve } from "styled-jsx/css";


const wait = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject('rejected'),3000)
    })
}

export default wait;