import React, { Component , useState } from 'react'
import Overview from './Component/Overview'
import logo from './images/Iconlogo.png'
import NavLeft from './Component/NavLeft'




const App = ()=>{

   const [itemClickey , setItemClickry] = useState('')
   
   const handleClick = (id)=>{
        setItemClickry(id)
   }

   return(
   <section className='section pt-3'>
        <div className='container pt-3 d-flex'>
           <NavLeft handleClick={handleClick} itemClickey={itemClickey}/>
           <Overview />
        </div>
   </section>
   )
}



// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: 'apexchart-example'
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         }
//       },
//       series: [{
//         name: 'series-1',
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//       }]
//     }
//   }
//   render() {
//     return (
//       <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
//     )
//   }
// }

export default App
