import React, { useEffect, useState } from 'react'
import Apidata from './Apidata'
import { RingLoader } from 'react-spinners'


const Apisfetch = () => {
    const Api = "https://api.github.com/users"
    const [apidata, setApidata] = useState([])
    const [loader,setLoader]=useState(true)
    const apifetchingdata = async () =>
    {
        setLoader(true)
        const response = await fetch(Api)
        const jsondata = await response.json()
        setApidata(jsondata)

        console.log(jsondata)
        setLoader(false)
       }
    useEffect(() =>
    {
     apifetchingdata()   
    }, [])
    if (loader)
    {
        return (
            <>
                <div className='text-center d-flex justify-content-center' style={{height:'100vh'}}>
                    <RingLoader color="#36d7b7" />
                    </div>
            </>
       )
        }
  return (
      <>
           <div className="my-3 container-fluid bg-danger p-4">
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