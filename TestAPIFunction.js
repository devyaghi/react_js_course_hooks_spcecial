import React, {useEffect, useState} from "react";

export default function TestAPIFunction(){

    const [data,setData]=useState([]);

    useEffect(()=>{

        fetch("http://yaghihub.site/api/tasks/index").then(response=>response.json())
            .then(data=>{
               // console.log(data.data)
                setData(data.data);

            })



    },[]);

    return data;

}