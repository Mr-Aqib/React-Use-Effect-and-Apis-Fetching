import React from 'react'

const Apidata = ({login,avatar_url}) => {
  return (
      <>
          <div className='col-lg-3'>
              <div className='d-flex flex-column'></div>
              <img width={'300px'} src={avatar_url} alt="" />
              <h4 className='text-center text-white'>{ login}</h4>
        </div>
        
      </>
  )
}

export default Apidata