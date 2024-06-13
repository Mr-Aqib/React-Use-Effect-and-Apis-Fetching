import React, { useEffect, useState } from 'react'

export const CleanUpfucntion = () => {
    const [size, setSize] = useState(window.innerWidth)
    const ChnageSize = () =>
    {
        setSize(window.innerWidth)
    }
    useEffect(() =>
    {
       
        window.addEventListener('resize', ChnageSize)
        return () =>
        {
            window.removeEventListener('resize',ChnageSize)
        }
     
    })
  return (
      <>
          <div className="container-fluid bg-dark p-4">
              <div className="container d-flex flex-column align-items-center justify-content-center">
                  <h1 className='text-white'>Clean Up function</h1>
                  <h3 className='text-white'>Window Size : <span>{ window.innerWidth}</span>px</h3>
              </div>
          </div>
      </>
  )
}
