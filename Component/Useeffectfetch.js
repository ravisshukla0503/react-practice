import React ,{useState,useEffect} from 'react'

function Useeffectfetch() {
    const [data ,setData]=useState([]);
    const [id,setid] =useState(1);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const res=response.json();
            setData(res);
            console.log(res.title);
        })
        .catch((err)=>{
            console.log("something wen rong")
        })
    },[id])

  return (
    <div>
     <input type="text" value={id} onChange={e=>setid(e.target.value)} />
     <h1>{data.title}</h1>
    </div>
  )
}

export default Useeffectfetch
