import React, { useEffect, useState } from 'react'
import Apidata from './Apidata'

const Apisfetch = () => {
    const Api = "https://api.github.com/users"
    const [apidata,setApidata]=useState([])
    const apifetchingdata = async () =>
    {
        const response = await fetch(Api)
        const jsondata = await response.json()
        setApidata(jsondata)

        console.log(jsondata)
       }
    useEffect(() =>
    {
     apifetchingdata()   
},[])
  return (
      <>
           <div className="container-fluid bg-dark p-4">
              <h2 className='text-white text-center'>Api Fetch Data</h2>
              <div className="row d-flex align-items-center justify-content-center">
                  {apidata?.map((items, index) =>
                  {
                      return (
                          <>
                              <Apidata key={index} {...items} />
                          </>
                      )
                     
                })}
              </div>
          </div>
      </>
  )
}

export default Apisfetch