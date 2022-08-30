import React from 'react'
import ReactApexChart from 'react-apexcharts'


const ChartEarnings = ()=>{

  const series = [44, 55, 67];
  const options = {
    chart: {
      height: 150,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: false,
            label: 'Total',
        },
        stroke: {
          lineCap: 'round'
        },
      }
    },
    
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  },


};

  return (
    <div className='py-2 px-3 chart orders__analytics col-3  h-100 '>
           <div className='title__icon__menu f-center justify-content-between'>
              <h1 className='font__large title '>Earnings</h1>
              <div className='icon__menu'>
                 <i class='bx bx-dots-horizontal-rounded'></i>             
              </div>
           </div>

           <div className='chart__cercle'>
           <ReactApexChart options={options} series={series} type="radialBar" height={250} />
           </div>

           <div className='mt-100 menu__element f-center justify-content-between'>
           <ul className='gap-1 mb-0 menu__elements f-center'>
                  <li className='of me-3 font__small element'>
                       Offline 
                  </li>
                  <li className='on me-3 font__small element'>
                       Online 
                  </li>
                  <li className='tr me-3 font__small element'>
                       Trade
                  </li>
                  
               </ul>
           </div>
        </div>
  )

  }
const Charts = () => {
  const series=  [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100,36]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41,91,85]
  }]
  const options=  {
    chart: {
      height: 350,
      type: 'area'
    },
    fill : {
      colors: ["#347AE2"],
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T08:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }



  
  return (
    <div className='section__charts row mt-3 w-100  justify-content-between'>
       <div className='py-2 px-3 chart orders__analytics col-8 h-100 '>
           <div className='title__elements f-center justify-content-between'>
               <h1 className=' mb-0 title font__large'>
                   orders Analytics
               </h1>
               <ul className='gap-1 mb-0 menu__elements f-center'>
                  <li className='of me-3 font__small element'>
                       Offline Orders
                  </li>
                  <li className='on me-3 font__small element'>
                       Online Orders
                  </li>

                  <select>
                     <option>Monthly</option>
                     <option>Day</option>
                     <option>Day</option>
                     <option>Day</option>
                  </select>
               </ul>

               
           </div>

          <div className='mt-2'>
             <ReactApexChart options={options} series={series} type="area" height={280} />
          </div>
       </div>
       <ChartEarnings />
    </div>
  )
}


export default Charts