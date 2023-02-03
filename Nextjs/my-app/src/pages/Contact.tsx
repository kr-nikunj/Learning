import React from 'react'
import style2 from "../styles/contact.module.css"

const Contact = () => {
  return (
    <div className={style2.container}>
      <h1 className={`${style2.heading} ${style2.heading2}`}>Hello World Contacts</h1>
      <p style={{color:"green", width: '100px'}}>This is a contact page</p>
    
        <h2>
            Heading 2
        </h2>

    <style jsx>{
        `
        h2 {
            color: yellow;
            font-size: 2rem;
        }
        `
    }

    </style>
    </div>
  )
}

export default Contact