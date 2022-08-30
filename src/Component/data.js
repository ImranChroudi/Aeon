import React from 'react'
/* ==== data NavLeft ====*/

//Menu top




const Data = ()=>{
      const DataMenuTop =[
      {
          id : 1,
          item : 'Overview',
          icon : <i class='bx bx-signal-3'></i>
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
          icon : <i class='bx bx-receipt'></i>
       }
       ,
       {
          id : 5,
          item : 'Setting',
          icon : <i class='bx bx-signal-3'></i>
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
          id : 1,
          item : 'Contact us',
          icon : <i class='bx bx-message-rounded-minus'></i>
       }
       ,
       {
          id : 1,
          item : 'Log out',
          icon : <i class='bx bx-log-in'></i>
       }
  ]
  
  /* === data section right === */
  
  // cards 
  
  
    const  Cards = [
       {
           numberUsers : 8758,
           total : 'total users',
            augmonte : '2.1',
           average : '+0.49% this week',
           iconPositive : <i class='bx bx-left-down-arrow-circle'></i>,
           iconNegative : <i class='bx bx-left-top-arrow-circle'></i>,
           icon : <i class='bx bx-user'></i>
       },
       {
         numberUsers : 2857,
         total : 'total Product',
           augmonte : '2.1',
           average : '+0.49% this week',
         iconPositive : <i class='bx bx-left-down-arrow-circle'></i>,
         iconNegative : <i class='bx bx-left-top-arrow-circle'></i>,
              icon : <i class='bx bx-briefcase-alt'></i>
  
        },
  
       {
  
        numberUsers : 3589,
  
      total : 'total users',
         augmonte : '2.1',
         average : '+0.49% this week',
        iconPositive : <i class='bx bx-left-down-arrow-circle'></i>,
        iconNegative : <i class='bx bx-left-top-arrow-circle'></i>,
        icon : <i class='bx bx-check-circle'></i>
      },
      {
          numberUsers : 4855,
          total : 'Refunded',
         augmonte : '2.1',
         average : '+0.49% this week' ,
         iconPositive : <i class='bx bx-left-down-arrow-circle'></i>,
         iconNegative : <i class='bx bx-left-top-arrow-circle'></i>,
        icon : <i class='bx bx-transfer' ></i>
   }
  ]
  
}



export default Data