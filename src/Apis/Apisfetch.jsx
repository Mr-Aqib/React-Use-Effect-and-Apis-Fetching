import React, { useEffect } from 'react'

const Apisfetch = () => {
    const Api = "https://api.github.com/users"
    const getapidata = async () =>
    {
        const response = await fetch(Api)
        const jsondata=await response.json()
        console.log(jsondata)
       }
    useEffect(() =>
    {
    getapidata ()   
},[])
  return (
      <>
           <div className="container-fluid bg-dark p-4">
              <div className="container d-flex flex-column align-items-center justify-content-center">
                  <h1 className='text-white'>Api Data Fetching</h1>
                 
              </div>
          </div>
      </>
  )
}

export default Apisfetch