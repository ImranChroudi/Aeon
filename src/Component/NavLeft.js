import React from 'react';
// import Data , {DataMenuTop , DataMenuBottom} from './data';
import Logo from '../images/Iconlogo.png'


const DataMenuTop =[
    {
        id : 1,
        item : 'Overview',
        icon : <i class='bx bx-bar-chart'></i>
     }
     ,
     {
        id : 2,
        item : 'Product',
        icon : <i class='bx bx-briefcase-alt'></i>,
        chevron : <i class='bx bxs-chevron-down'></i>

     }
     ,
     {
        id : 3,
        item : 'Orders',
        icon : <i class='bx bx-user'></i>,
        chevron : <i class='bx bxs-chevron-down'></i>

     }
     ,
     {
        id : 4,
        item : 'Checkout',
        icon : <i class='bx bx-receipt'></i>,
        notification : 2
     }
     ,
     {
        id : 5,
        item : 'Setting',
        icon : <i class='bx bx-grid-horizontal'></i>
     }
]

// Menu bottom
const DataMenuBottom =[
    {
       id : 1,
       item : 'Help Centre',
       icon : <i class='bx bx-help-circle'></i>
    }
    ,
    {
       id : 2,
       item : 'Contact us',
       icon : <i class='bx bx-message-rounded-minus'></i>
    }
    ,
    {
       id : 3,
       item : 'Log out',
       icon : <i class='bx bx-log-in'></i>
    }
]



/* === Menu top ====*/
const MenuTop=({ handleClick , itemClickey })=>{
    
   return(
       <div className='menu__top'>
          <ul className='nav-menu px-0 felx-colmun'>
            {DataMenuTop.map((item)=>(
                <li id={item.id === itemClickey && 'active'} onClick={()=>{handleClick(item.id)}} key={item.id} className='d-flex align-items-center nav-item item '>
                    <i className={item.icon.props.class}></i>
                    {item.item}
                     {item.chevron && <i className={item.chevron.props.class}></i>}
                     {item.notification && <span className='text-white f-center rounded-circle '>{item.notification}</span>}
                </li>
            ))}
          </ul>
       </div>
   )
}

/* === Menu bottom ====*/
const MenuBottom=()=>{
     return(
        <div className='menu__bottom mx-auto mb-auto'>
          <ul className='nav-menu px-0 felx-colmun'>
            {DataMenuBottom.map((item)=>(
                <li key={item.id}  className='d-flex align-items-center nav-item item'>
                    <i className={item.icon.props.class}></i>
                    {item.item}
                     {item.chevron && <i className={item.chevron.props.class}></i>}
                </li>
            ))}
          </ul>
       </div>
     )  
}


const NavLeft = ({ handleClick , itemClickey })=>{
    return(
        <nav classList='nav pe-3 w-25 h-100 bg-green'>
          <div className='d-flex align-items-center logo'>
            <img className='img__logo' src={Logo} alt='logo' />
            <h1 className='fw-bolder mt-1 title__logo'>Aeon</h1>
          </div>

            <MenuTop handleClick={handleClick} itemClickey={itemClickey}/>
            <MenuBottom />
        </nav>

    )
}



export default NavLeft