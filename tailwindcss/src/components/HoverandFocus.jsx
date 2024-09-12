import React from 'react'

const HoverandFocus = () => {
  return (
    <div>
      <h1 className='text-2xl'>Hover And Focus</h1>
      <button className='w-40 bg-sky-500 text-slate-50 rounded-full py-2 mx-2 hover:bg-sky-400 shadow-slate-400'>Save</button>
      <button className='w-40 bg-red-500 text-white rounded-full py-2 mx-2 hover:bg-red-400 shadow-slate-400 focus:ring-4 focus:ring-green-500'>Save</button>

      <div className='mt-2.5'>
        <input type="email" className='border
        border-gray-500 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 focus:outline-red-500 peer' />
      </div>
      <p className='mt-2 text-red-600 invisible peer-invalid:visible'>Please provide a valid email</p>
    </div>
  )
}

export default HoverandFocus
