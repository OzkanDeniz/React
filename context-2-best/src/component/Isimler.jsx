import React, { useContext } from 'react'

import AnaUser from "./AnaUser";
import { KullaniciContext } from '../context/KullaniciProvider';
const Isimler = () => {

  const {users} = useContext(KullaniciContext)

  return (
    <div>
    

   <AnaUser/>

    </div>
  );
}

export default Isimler