import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Picture = () => {
    const [data,setData]= useState([])

        useEffect(()=>{
        axios.get("https://picsum.photos/v2/list").then((res)=>
        setData(res.data))       .catch((err)=> console.log(err))
    },[])
       return ( 
        <div>
            {data.map((data)=>{
                // console.log(data[0].download_url);
                return <div key={data.id}>
                    <img  src={data.download_url} width="400" 
                height="500" />
                </div>
            })}
            Hello World😁
            
        </div>
     );
}
 
export default Picture;