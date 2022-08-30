import React from 'react'
import user from '../images/user.png';

const Header = () => {
  return (
    <header className='border-none d-flex w-100 justify-content-between'>
         <div className='para__welcom'>
            <p className='para font__large fw-bold mb-0'>Welcome Back, Marci</p>
            <p className='font__para'>Here is the information about all your orders</p>
         </div>

         <div className='nav__header d-flex align-items-center gap-4'>
               <div className='header__icons d-flex gap-2 align-items-center'>
                <ul className='d-flex gap-2 align-items-center mb-0'>
                   <li><i class='fs-4 bx bx-search'></i></li>
                    <li className='notification'><i class='fs-4 bx bxs-bell'></i></li>
                </ul>
                  
               </div>
               <div className='user'>
                   <div className='img__name__user d-flex align-items-center gap-2'>
                      <img src={user} alt='user' />
                      <h3 className='font__para text-black'>Marci Fumons</h3>
                   </div>
                   
               </div>  
         </div>
    </header>
  )
}

export default Header