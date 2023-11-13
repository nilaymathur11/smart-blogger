import React from 'react'

export default function TextArea({ labelName, id, name, placeholder }) {
    return (
        <div>
           <label htmlFor={id?id:''} className="block mb-2 text-[18px] font-light text-gray-900 dark:text-white">{labelName?labelName:''}</label>
            <textarea id={id?id:''} rows="6" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder?placeholder:''} name={name?name:''} required></textarea>
        </div>
    )
}
