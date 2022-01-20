import React from "react";
import {useState} from "react";
const Form = (props) => {
  const [firstName, setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const [phone, setPhone]=useState("");
  const [email, setEmail]=useState("");
  const [query, setQuery]=useState("");
 
  const handleFirstName=(event)=>{
      setFirstName(event.target.value);
  };
  const handleLastName=(event)=>{
      setLastName(event.target.value)
  }
  const handlePhone=(event)=>{
    setPhone(event.target.value)
}
const handleEmail=(event)=>{
    setEmail(event.target.value)
}
const handleQuery=(event)=>{
    setQuery(event.target.value)
}
//form validation
const handleSubmit=(event)=>{
    const re= /^[A-Za-z]+$/;
    if (!re.test(firstName)||!re.test(lastName)){
        alert("input name field letter only")
        return false
    }
    const re2=/^(\d|-|\(|\))+$/
    event.preventDefault()
    if (!re2.test(phone)){
      alert ("input valid character please")
      return false
    }
}
    return ( 
      <form action="" className="simpleForm" onSubmit={handleSubmit}>
          <div className="formInfo">
            <label htmlFor="">FirstName</label>
            <input type="text" className="nameInput" value={firstName}
             onChange={handleFirstName} required/>
          </div>
          <div className="formInfo">
            <label htmlFor="">LastName</label>
            <input type="text" className="nameInput" value={lastName} onChange={handleLastName} required/>
          </div>
          <div className="formInfo">
            <label htmlFor="">Phone</label>
            <input type="text" className="phoneInput" value={phone} onChange={handlePhone} required/>
          </div>
          <div className="formInfo">
            <label htmlFor="">Email</label>
            <input type="text" className="emailInput" value={email} onChange={handleEmail} required/>
          </div>
         <div className="formInfo">
            <label htmlFor="">Query</label>
            <textarea type="text" className="query" style={{height:100}} value={query} onChange={handleQuery} required/>
         </div>
         <div className="formInfo">
            <input  className="submit" type="submit" value="Submit"  onClick={()=> props.setShow(true)}/>
         </div>
      </form>  
    );
}
 
export default Form;