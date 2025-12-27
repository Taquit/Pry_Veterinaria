import { useState,useEffect } from "react";

export function useFetchTienda(url){
    const [data,setData]=useState([]);
    
    const fetchData = async(id)=>{
        try {
            const response = await fetch(`${url}${id}`)
            const data = await response.json()
            setData((prevdata)=>[...prevdata,data])   
        } catch (error) {
            console.log("ERROR DE   HOOK FETCH TIENDA")
        }
        
    }

    const fetchAllData=()=>{
        for(let i=0;i<19;i++){
            fetchData(i)
        }
    }

    useEffect(()=>  {
        fetchAllData()
    },[])
    return data;
}