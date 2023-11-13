import React from 'react'

export default function BasicInput({ labelName, id, name, type, placeholder,onChange }) {
    return (
        <div>
            <label htmlFor={id?id:''} className="block mb-2 text-[18px] font-light text-gray-900 dark:text-white">{labelName?labelName:''}</label>
            <input type={type?type:'text'} id={id?id:''} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder?placeholder:''}  name={name?name:''} onChange={onChange?onChange:null} required/>
        </div>
    )
}
