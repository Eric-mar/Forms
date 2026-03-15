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

    const [search, setSearch] = useState([])

    const handleChange = useCallback(e=>setSearch(e.target.vale),[])
    const items = useMemo(()=>{
        return Array.from({length:1000},(_,i)=> `Item ${i+1}` )
    },[])
    const filteredItems = useMemo(()=>{
        return items.slice(0,10).filter((item)=> item.toLowerCase().includes(search.toLowerCase()))
    })
  return (
    <main>
        <input type="text" onChange={handleChange} />
        <ul>
            {filteredItems.map((el,index)=>(
                <li key={index}>{el}</li>
            ))}
        </ul>
    
    </main>
  )
}

export default Lists