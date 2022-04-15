import React, { useEffect } from "react";
import axios from "axios";

export default function HomeScreen({token}){
    
    useEffect(()=>{
        if(token){
            fetchData(token);
        }
    },[token])
    
    const fetchData = async (token)=>{
        const res = await axios.get('http://localhost:5000/api/homescreen',{
            headers:{
                Authorization: 'Bearer ' + token,
            },
        });
        console.log(res);
    }
    
    
    return (
        <div>
            <h1>HomeScreen</h1>
        </div>
    )
}