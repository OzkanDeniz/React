import React from 'react'

const SpacingandSizing = () => {
  return (
    <div>
      <h3 className='text-2xl'>Spacing and Sizing</h3>
      <button className='bg-blue-500 text-white p-4 m-1'>Tıkla</button>
      <button className='bg-blue-500 text-white px-4'>Tıkla</button>
      <button className='bg-blue-500 text-white ms-4'>Tıkla</button>
      <button className='bg-blue-500 text-white ml-4'>Tıkla</button>
      <button className='bg-blue-500 text-white px-4 py-4 ml-2'>Tıkla</button>
      <div>
        <button className='bg-green-500 mx-4 px-4 py-2 border-green-950 rounded-md'>Gönder</button>
        <button className='bg-green-500 mx-4 px-4 py-2 border-[3px] rounded-[10px]'>Gönder</button>
        <button className='bg-green-500 mx-4 px-4 py-2 border-[3px] rounded-full'>Gönder</button>
        <button className='bg-green-500 mx-4 px-4 py-4 border-[3px] rounded-[50%]'>Gönder</button>
      </div>
    </div>
    
  )
}

export default SpacingandSizing
