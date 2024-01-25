
import { useState } from 'react';

import React from 'react'

const App=()=>{
  const [name,setName]=useState("")
  const [fullName,setFullName]=useState()
  const input=(e)=>{
    console.log(e.target.value);
    setName(e.target.value)
  }
  const onSubmit=()=>{
    setFullName({name}) 
  }
 return( <>
<div>
  <h1>Hello {fullName}</h1>  
  <input type="text" placeholder='Enter your name' 
  onChange={input}
  />
<button onClick={onSubmit}>click me</button>
</div>
  
  </>);
};
export default App;