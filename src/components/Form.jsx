import React,{useState} from 'react'
// ### ✅ Exercise 1: Login Form

// - Create a **login form** with:
//     - Email and password fields.
//     - Make it a **controlled component**.
//     - Show an **error message** if the password is less than 6 characters.
//     - Add a button that **toggles between showing and hiding the password**.

function Form() {
  const [forms,setForms] = useState({
    email:'',
    password:''
  })
  const [error, setError] = useState(null)
  const [showPass,setPass] = useState(false)

  const handleChange = (e)=>{
    const {name,value} = e.target
    setForms(prev=>({
      ...prev,
      [name]:value
    }))
    if (name === password && value<6 ) return setError('try again')
      
  }
  const handleForm = ()=>{
    e.preventDefault()
    setError('')
  }
  const tooglePass = ()=>{
    setPass(prev => !prev)
  }
 return( 
 <form onSubmit={handleForm} className='font-black p-4 '>
<input type="text" name='email' value={forms.email} onChange={handleChange} className='border-2 m-4' /><br /><br /><br />
<input type={showPass ? 'text':'password'} name='password' value={forms.password} onChange={handleChange} className='border-2 m-4'/><br /><br /><br />
<button type='button' onClick={tooglePass} className='bg-green m-4'>{showPass? 'hide' : 'show'}</button><br /><br />
<button type='submit' className='bg-green m-4'>Submit</button><br /><br />

  </form>
)}
export default Form
