import { useEffect, useState } from "react";

const ApiMocking =()=>{
    const[data,setData] = useState([])
   

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setData(data)

    }

    return(
        <div>
            <h1>List of Users</h1>
                {data.map((item :{id:number;name:string})=>(
                    <li key={item.id}>{item.name}</li>
                ))}
        </div>
    )
}

export default ApiMocking;