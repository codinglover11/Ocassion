import React from 'react'
import "./WORK.css"
function WORK() {
  return (
    <div className='MAIN-DIV'>
    <section className='MAIN-LEFT'>
    <section className='nav'></section>
    </section>    
    <main className='MAIN-BOX'>
    <form>
<label htmlFor="name">Name:</label><br />
<input type="text" id="name" placeholder='Enter Your Name'/><br />

<label htmlFor="Age">Age:</label><br />
<input type="text" id="Age" placeholder='Enter Your Age'/><br />

<label htmlFor='Section'>Section:</label><br />
<select  id="Section">
    <option value="">Select Your Section</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
</select><br/>

<label htmlFor="MailId">MAIL ID:</label><br />
<input type="mail"  id="mail" placeholder='Enter Your mail id:abc@gmail.com'/><br />
    </form>
    </main>
    </div>
  )
}

export default WORK
