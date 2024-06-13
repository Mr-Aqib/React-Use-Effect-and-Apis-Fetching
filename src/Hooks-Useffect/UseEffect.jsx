import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const handleclick = () =>
    {
        setCount(count+1)
    }
    useEffect(() =>
    {
        if (count == 0)
        {
            document.title='No new Messages'
        }
        else {
             document.title=`(${count}) new Messages`
        }
       
},[count])

    
  return (
      <>
          <div  className="bg-secondary cardcontainer-fluid p-4">
              <div className="container d-flex align-items-center justify-content-center flex-column">
                <h2 className='text-white' >Use-Effect- Hook</h2>
                  <h1 >{ count}</h1>
                  <button onClick={handleclick} className="btn btn-primary">Increase</button>
              </div>
          </div>
      </>
  )
}

export default UseEffect