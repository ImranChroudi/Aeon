import React from 'react';
import Header from './header'
import Cards from './Cards'
import Charts from './Charts'
import OrderList from './OrderList';



const SectionRight = () => {
  return (
    <div className='w-75 section__right'>
         <div className='container__section__right'>
             <Header />
             <Cards />
             <Charts />
             <OrderList />
         </div>
    </div>
  )
}

export default SectionRight