import React, { useState } from "react";




const Hooks=()=>{

    const state=useState();
    // console.log(state)
    //its a array destructring
  const[count,setCount]=useState(0)
//useState is initial value
// count is current value
//setCount is updated value
const IncNum=()=>{

    setCount(count+1);
    // console.log('clicked'+ count++);
}
return(
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Here</button>
    </>
)
}

export default Hooks