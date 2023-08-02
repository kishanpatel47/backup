const initialRouteName =0;
const changethenumber=(state=initialRouteName,action)=>{
    switch(action.type)
    {
        case "Increment":
            return state+1
            
        case "Decrement":
            return state-1
            default:return state;
    }
}
export default changethenumber;