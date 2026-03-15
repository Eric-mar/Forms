import React from 'react'
// - Fetch data from [**https://jsonplaceholder.typicode.com/posts**](https://jsonplaceholder.typicode.com/posts).
// - Use **useEffect** for fetching.
// - Display:
//     - A **loading indicator** while fetching.
//     - The **list of posts** when ready.
// - Add a **“Refresh” button** to re-fetch posts.
function DisplayPost() {

     useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
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
  return (
    <div>DisplayPost</div>
  )
}

export default DisplayPost