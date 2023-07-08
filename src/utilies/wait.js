// import { resolve } from "styled-jsx/css";


const wait = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(''),3000)
    })
}

export default wait;