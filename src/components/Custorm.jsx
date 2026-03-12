import React, {useState, useEffect } from 'react'
// ### Exercise 4: useUsers Hook

// - Create a **custom React hook** that fetches a list of users from:
//     - [**https://jsonplaceholder.typicode.com/users**](https://jsonplaceholder.typicode.com/users)
// - Return:
//     - Fetched **user data**,
//     - A **loading state**,
//     - An **error state**.
// - When displaying:
//     - Show **“Loading...”** while fetching.
//     - Show an **error message** if the request fails.

function Custorm() {
    const [loading,setLoading]=useState(true)
     const [error,setError]=useState(null)
      const [data,setData]=useState([])
      

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            if(!response.ok){
                throw new Error("failed to fetch!!!")
            }
            return response.json()
        }
        )
        .then((data)=>
          
             setData(data) 
            
    )
        .catch((error)=>setError(error.message))
        .finally(()=> setLoading(false))
    },[])

    const filteredItems = data.map((el)=>{
        return (
            <div key={el.id} className='m-4 p-3 '>
                <p>{el.name}</p>
                <p>{el.email}</p>
                <p>{el.address.city}</p>
            </div>
        )
    })
  
  if (loading) return <h2>Loading data...</h2>
  if (error) return <h2>Error while fetching: {error}</h2>
  return (
    <div>
        
            <div>{filteredItems}</div>
    </div>
  )
}

export default Custorm