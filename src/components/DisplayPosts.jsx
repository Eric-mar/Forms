import React, { useCallback, useEffect, useState } from 'react'
// ### Exercise 3: Fetch and Display Posts

// - Fetch data from [**https://jsonplaceholder.typicode.com/posts**](https://jsonplaceholder.typicode.com/posts).
// - Use **useEffect** for fetching.
// - Display:
//     - A **loading indicator** while fetching.
//     - The **list of posts** when ready.
// - Add a **“Refresh” button** to re-fetch posts
function DisplayPosts() {
    const [loading,setloading] = useState(true)
    const [posts,setPost] =useState([])
    const [error,setError] = useState(null)
    
    const fetchingData = useCallback(async()=>{
        setloading(true)
        try{
             
       const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
       const data = await res.json()
       setPost(data)
       console.log(data)
       setError(null)
      
        }
        catch(error){ setError("failed to fetch!!")}
        finally{setloading(false)}
    },[])
    useEffect(()=>{fetchingData()},[fetchingData])
    if (loading) return <p>Loading ...</p>
    if (error) return <p>{error}</p>
  return (
  <main>
    <button onClick={fetchingData} className='text-2xl p-4 m-4 font-bold '>Reflesh</button>
    <ul>
        {posts.map((el)=>(
            <li key={el.id}>{el.title}</li>
        )

        )}
    </ul>
  </main>
  )
}

export default DisplayPosts