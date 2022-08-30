import React , {useState} from 'react'



const tableOrderList = [
        [
          "No",
          "ID",
          "Date",
          "Customer Name",
          "Location",
          "Amount",
          "Status Order",
          "Action"      
        ],
        [
          {
            No: "#12594",
            ID: "#12594",
            Date: "Dec 1, 2021",
            CustomeName: 'Frank Murlo',
            Location: '312 S Wilmette Ave',
            Amount: '$847.69',
            StatusOrder: 'New Order',
            Action: ''
          },
          {
            No: "#12594",
            ID: "#12594",
            Date: "Dec 1, 2021",
            CustomeName: 'Frank Murlo',
            Location: '312 S Wilmette Ave',
            Amount: '$847.69',
            StatusOrder: 'New Order',
            Action: ''
          },
          {
            No: "#12594",
            ID: "#12594",
            Date: "Dec 1, 2021",
            CustomeName: 'Frank Murlo',
            Location: '312 S Wilmette Ave',
            Amount: '$847.69',
            StatusOrder: 'New Order',
            Action: ''
          },
          {
            No: "#12594",
            ID: "#12594",
            Date: "Dec 1, 2021",
            CustomeName: 'Frank Murlo',
            Location: '312 S Wilmette Ave',
            Amount: '$847.69',
            StatusOrder: 'New Order',
            Action: ''
          }
        ]
]
let numberOredr = 0;
const OrderList = () => { 

  const [dataTable , setDataTable] = useState(tableOrderList)
  return (
    <div className='section__orders__list w-100 my-3'>
             <div className='container__ordersList'>
                   <div className='table__orders__list m-0 py-2 px-3'>

                    <div className='title__menu__monthly f-center justify-content-between mb-2'>
                          <h1 className='title font__large'>Orders Lists</h1>
                          <select>
                              <option>Monthly</option>
                          </select>
                    </div>

                   <table class="table">
                     <thead>
                       <tr>
                        {dataTable[0].map((element)=>(
                               <th scope='col'>{element}{element === "Customer Name" && <i class='bx bx-sort'></i>}
                               {element === "Amount" && <i class='bx bx-sort'></i>}
                               {element === "Status Order" && <i class='bx bx-sort'></i>}</th>
                        ))}
                       </tr>
                     </thead>
                     <tbody>
                      {dataTable[1].map((item)=>(
                            <tr>
                              <th scope="row">{ numberOredr = numberOredr + 1}</th>
                               <td>{item.ID}</td>
                               <td>{item.Date}</td>
                               <td>{item.CustomeName}</td>
                               <td>{item.Location}</td>
                               <td>{item.Amount}</td>
                               <td>{item.StatusOrder}</td>
                               <td className='action'><i class='bx bx-dots-horizontal-rounded'></i></td>
                            </tr>
                      ))}
                      
                        </tbody>
                      </table>
                   </div>
             </div>
    </div>
  )
}

export default OrderList