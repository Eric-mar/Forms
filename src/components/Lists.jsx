import React, { useEffect, useState } from 'react'

// ### Exercise 2: Large List with Filtering

// - Build a component that:
//     - Renders a list
//     - of **10**
//     - **1000 items** (dummy data).
//     - Includes a text input to **filter items**.
//     - Optimize performance using:
//         - **useMemo** → for filtering logic.
//         - **useCallback** → for event handlers.
function Lists() {
    const [err,setErr] =  useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products`)
        .then((products)=>{
            if (!products.ok){
                throw new Error(err)
            }
            const data = products.json()
            console.log(data)
            return data
           
     } ).catch(error=>{
        setErr('try again',error)

     })
     .finally(setLoading(false))


    },[])

  return (
    <>
    <input type="text" className='border-2 bg-orange-400 p-3 m-5 ' />
    {}
    </>
  )
}

export default Lists