import React, { useState } from 'react';

function Contact() {
  const password = 'cesar';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

   const login = (
    <form action="#" onSubmit={handleSubmit}>
    <input type ="password"></input>
    <input type="submit"></input>
    </form>
   )

   const contactInfo = (
    <ul>
          <li>
            client@hotmail.com
          </li>
          <li>
            666.666.6666
          </li>
        </ul>

   )

  return (
      <div id="authorization">
        <h1>
        {
          authorized ? "Contact" : "Enter the Password"
        }
        
        </h1>
        
      {
        authorized ? contactInfo : login
      }
      </div>
  ); // conditionals in components
}

export default Contact;