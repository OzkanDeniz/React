import React, { useContext } from 'react'
import { KullaniciContext } from '../context/KullaniciProvider'

const AnaUser = () => {
const {users}= useContext(KullaniciContext)


  return (
    <div>
      {users.map((a)=>(
        <div>
          <h3>
            {a.login}
          </h3>

          <img src="{a.avatar_url}" alt="" />
        </div>
        



      ))}
    </div>
  )
}

export default AnaUser