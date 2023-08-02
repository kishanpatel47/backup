const Increment=()=>{
    return({
        type:"Increment",

        payload:1 
    })
}
const Decrement=()=>{
    return({
        type:"Decrement",
        
        payload:1 
    })
}
export default{Increment,Decrement}