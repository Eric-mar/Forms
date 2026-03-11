import { useState,useEffect } from 'react'

// Section 1: Basic Controlled Components
// ✅ Exercise 1: Login Form
// Create a login form with:
// Email and password fields.
// Make it a controlled component.
// Show an error message if the password is less than 6 characters.
// Add a button that toggles between showing and hiding the password.

function App() {

const [form,setForm] = useState({
  email: '',
  password: ''
})
  const [passCode, setPasscode]=useState(false)
  const [err, setErr] = useState()

  const handleInput =(e)=>{
    const {name,value} = e.target 
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleForm = (e)=>{
    e.preventDefault()

  if(form.password.length < 6){
   setErr("enter the 6 character! ")
   return 
  }
  setErr("")
  alert("form submitted")

}


  const togglebutton = ()=>{
    setPasscode(!passCode)
  }


  return(
    <>
    <form action="submit" className='font-bold m-4' onSubmit={handleForm}>

      <label htmlFor="email" name="email" >Email</label>
      <input type="text" placeholder='Enter email... '
      name='email'
      className='border-2 px-3 mx-4'
      value={form.email}
      onChange={handleInput}/>
<br />
<br />
<br />
       <label htmlFor="password" name="password">Email</label>
      <input type={passCode ? 'text': 'password'} placeholder='Enter passcode... '
       className='border-2 px-3 mx-4'
       value={form.password}
       name='password'
       onChange={handleInput}/>
<br />
<br />
<br />

<button className='bg-green-500 p-2 border-2 hover:bg-amber-600 ' 
type='button'
onClick={togglebutton}>
  {passCode ? 'hide':'show'}</button>
   {err && <p className="text-red-500">{err}</p>}

   
    </form>
    </>
  )

}

export default App
