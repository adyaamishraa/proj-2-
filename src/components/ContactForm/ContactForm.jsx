import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";


const ContactForm = () => {

  const [name, setName] = React.useState("");//setting default value
  const [email, setEmail] = React.useState("");//setting default value
  const [text, setText] = React.useState("");//setting default value

  function onSubmit(event) {
    event.preventDefault();//form will not reload the page. form will not submit the data to the server
    console.log(event.target);

    console.log("name",event.target[0].value);
    setName(event.target[0].value); //setting the value of name to the value entered in the input field

    console.log("email",event.target[1].value);
    setEmail(event.target[1].value); //setting the value of email to the value entered in the input field

    console.log("text",event.target[2].value);
    setText(event.target[2].value); //setting the value of text to the value entered in the input field

  }

  return (
    <section className={`${styles.container}`}>
      
      <div className={`${styles.contact_form}`}>
       
        <div className={`${styles.top_button}`}>
          <Button isOutline={false} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize= "24px"/>}/>
          <Button isOutline={false} text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>
        </div>
        
        <Button isOutline={true} text="VIA EMAIL FORM " icon={<AiTwotoneMail fontSize="24px"/>}/>

        <form onSubmit={onSubmit}>
          
          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="Name" id="name" />
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="text">TextArea: </label>
            <textarea name="text" rows={8}/>
          </div>

          <div style={{display: "flex", justifyContent: "end"}}>
          <Button isOutline={false} text="SUBMIT "/>
          </div>

          <div>{name+ " " + email + " " + text}</div>

        </form>
      </div>

      <div >
        <img src="/images/pic.svg" alt="pic" className={`${styles.contact_Image}`}/>
      </div>
      
    </section>
  )
}

export default ContactForm