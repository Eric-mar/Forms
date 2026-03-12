import React, { useEffect, useState, useMemo, useCallback } from 'react'

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
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [input,setInput] = useState("")


    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products`)
        .then((products)=>{
            if (!products.ok){
                throw new Error('fetch failed')
            }
          return products.json()
           
     } ).then((data)=>{
        setData(data)
     }

     ).catch(error=>{
        setErr(error.message)

     })
     .finally(()=>setLoading(false))


    },[])

    const handleInput = useCallback(e=>{
        setInput(e.target.value)
    },[])

    const listItem =  data.map(el=>{                                                                                                                                                                                                                   
        return (
        <div key={el.id}>
           <p>{el.title}</p>
           <p> {el.id}</p>
    </div> 
        
    )}
        )
    }
    console.log(input)

  return (
    <>
    <input type="text" className='border-2 p-3 m-5 ' 
    onChange={handleInput}
    value={input}

    />
   <div>
    {listItem}
   </div>
    </>
  )


export default Lists