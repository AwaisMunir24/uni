import React, { Component } from 'react';
const Input=(props)=>{
    const{className,type,value,placeholder,onChange}=props;
    return(

            <>
            <input className={className} type={type} value={value} placeholder={placeholder} onChange={onChange}/>
            </>


    )
}
export default Input