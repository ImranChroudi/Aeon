import React from 'react'


const MenuCards = [
  {
      number : 8758,
      total : 'total users',
       augmonte : '4.0',
      average : '+0.49% this week',
      iconNegative : <i class='bx bx-left-down-arrow-circle'></i>,
      iconPositive : <i class='bx bx-left-top-arrow-circle'></i>,
      icon : <i class='bx bx-user'></i>
  },
  {
    number : 2857,
    total : 'total Product',
    augmonte : '7.5',
    average : '+0.49% this week',
    iconNegative : <i class='bx bx-left-down-arrow-circle'></i>,
    iconPositive : <i class='bx bx-left-top-arrow-circle'></i>,
         icon : <i class='bx bx-briefcase-alt'></i>

   },

  {

   number : 3589,
 total : 'total users',
    augmonte : '2.1',
    average : '+0.49% this week',
   iconNegative : <i class='bx bx-left-down-arrow-circle'></i>,
   iconPositive : <i class='bx bx-left-top-arrow-circle'></i>,
   icon : <i class='bx bx-check-circle'></i>
 },
 {
     number : 4855,
     total : 'Refunded',
    augmonte : '8.6',
    average : '+0.49% this week' ,
    iconNegative : <i class='bx bx-left-down-arrow-circle'></i>,
    iconPositive : <i class='bx bx-left-top-arrow-circle'></i>,
   icon : <i class='bx bx-transfer' ></i>
}
]




const Cards = () => {
  return (
    <div className='cards row mw-0 w-100 mt-4'>
      {MenuCards.map((item)=>(
           
      <div className='card col'>
            <div className='number__name__icon d-flex justify-content-between'>
                <div className='number__name'>
                    <h1 className='mb-0 font__large '>{item.number}</h1> 
                    <p>{item.total}</p>
                </div>   

                <div className='icon__card px-1 py-1'>
                      <i class={item.icon.props.class}></i>
                </div>

            </div>
            
            <div className='icon__augmont__averge mt-1 f-center justify-content-between align-items-center'>
                    <i className={item.augmonte < 5 ? item.iconNegative.props.class : item.iconPositive.props.class}></i>
                    <p className='font__para augmonte'>{item.augmonte}</p>
                    <p className='font__para averge'>{item.average}</p>
            </div>
      </div>
      ))}
    </div>
  )
}

export default Cards