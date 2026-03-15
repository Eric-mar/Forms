import React from 'react'

function Users() {
       const [loading,setLoading]=useState(true)
     const [error,setError]=useState(null)
      const [data,setData]=useState([])
      const [user,setUser] = useState([])
      

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
  return {data, loading, error}
}

export default Users