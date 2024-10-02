import React, { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { heart, menu, close } from 'ionicons/icons'; // Import specific icons

function Header() {
    const [icon,setIcon]=useState('menu')
   const onTogel=()=>{
    setIcon((prevIcon)=>(prevIcon==='menu'?'close':'menu'));
    const nav=document.querySelector('.navlink');
    if (nav) {
            nav.classList.toggle('top-[9%]');
    }
   }
   
 

  return (
   
<header className='bg-gray-500 p-1 ' >
  <nav class="flex justify-between items-center w-[92%] mx-auto">
    <div>
        <img src="https://img.freepik.com/premium-photo/colorful-bird-with-colorful-wing-it_1208590-45852.jpg?size=626&ext=jpg&ga=GA1.1.1813073946.1727876575&semt=ais_hybrid" alt="" className='w-20 h-20 rounded-full' />
    </div>
    <div className= ' navlink  md:static absolute   md:min-h-fit min-h-[60vh] left-0 top-[-100vh] md:w-auto flex items-center px-5  my-5' >
      <ul class="flex md:flex-row flex-col md:gap-[4vw] md:items-center gap-5  ">
        <li> <a className='hover:text-red-400' href="#"> Home </a></li>
        <li> <a className='hover:text-red-400' href="#"> Home </a></li>
        <li> <a className='hover:text-red-400' href="#"> Home </a></li>
        <li> <a className='hover:text-red-400' href="#"> Home </a></li>
        <li> <a className='hover:text-red-400' href="#"> Home </a></li>
        
      </ul>
    </div>
    <div className='flex items-center gap-6'>
 <button class="px-5 py-3 bg-blue-400 rounded-full hover:bg-blue-700">Sing In</button>
 <IonIcon icon={icon==='menu'? menu : close} onClick={onTogel} className='text-3xl cursor-pointer md:hidden ' role="img" />
     </div>
  </nav>
</header>
  )
}

export default Header
