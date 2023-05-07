import { useRef } from "react";

function Contact() {
   const nameRef = useRef ('');
   const emailRef = useRef ('');
   const messageRef = useRef ('');
   const previewRef = useRef ('');


//const[state,setState]= useState(false);
console.log('Rerendered');
const handleNameChange =(e)=>{
    nameRef.current=e.target.value;
}
const handleEmailChange =(e)=>{
    emailRef.current=e.target.value;
}
const handleMessageChange =(e)=>{
    messageRef.current=e.target.value;
}

const handleSubmit = () =>{
    console.log(nameRef.current,emailRef.current,messageRef.current);
    //setState(true);
    previewRef.current.textContent = `Preview: ${nameRef.current}, ${emailRef.current},${messageRef.current}`;
    
}
    return (
     <div className="contact-form">
     <div className="contact-field">
     <label>Name </label>
          <input type="text" ref={nameRef} onChange={handleNameChange} placeholder="Enter Name"/>
     </div>
     <div className="contact-field">
     <label>Email:</label>
          <input type="text" ref={emailRef} onChange={handleEmailChange} placeholder="Enter Email"/>
     </div>
     <div className="contact-field">
     <label>Message:</label>
          <textarea ref={messageRef} onChange={handleMessageChange} placeholder="Enter Message"/>
      
      </div>
      <div ref={previewRef}></div>
      <div>
      <button onClick={handleSubmit}>Submit</button>

      </div>
         
     </div>
       
    )
  }

  export default Contact;