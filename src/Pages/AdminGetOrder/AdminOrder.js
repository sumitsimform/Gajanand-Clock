// import React from 'react'

// export default function AdminOrder() {
//     return (
//         <div>
//             Admin Order Page
//         </div>
//     )
// }

import React, {useEffect, useState} from 'react'
import Header from '../AddPhoto/AddPhotoHeader'
import firebase from '../../Components/Firebase'
import Swal from 'sweetalert2';
export default function AdminOrder() {
const [data,setData] = useState([])
    useEffect(() => {
        const  CurrentUser = firebase.auth().currentUser;
        console.log('INNNNNNNN=>',CurrentUser)
        // let total = 0
        if(CurrentUser){
            var starCountRef = firebase.database().ref(`Users/${CurrentUser.uid}/Orders`);
            starCountRef.on('value', (snapshot) => {
            setData(snapshot.val())
            console.log("History DATA ==>",snapshot.val())
            });

        }
    },[])

    const handleSelectEvent = (e,product) => {
        console.log("CHANGE=>",e.target.value,'=-=',product)
        const  CurrentUser = firebase.auth().currentUser;
        if(CurrentUser){
            firebase.database().ref(`Users/${product.user_id}/History/${product.product_name}`).update({
                Status:e.target.value
            }).then(()=>{
                Swal.fire(
                    'Order Status',
                    'SuccessFul Change Order Status...',
                    'success'
                  )
            }).catch((error)=>{
                console.log('ERROR=>',error)
            })

        }
    }

    return (
        <>
        <Header text={'Orders'} />
        <div className="pb-5">
        <div className="container">
        <div className="row">
        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

          <div className="table-responsive"></div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Status</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  {/* {console.log('DATA RENDER =>',data,Object.values(data))} */}
                {data ? 
                <> 
                {Object.values(data).map((product)=>(
                    <tr>
                    <th scope="row" className="border-0">
                    <div className="p-2">
                        
                        <img src={product.img_URL} alt="" width="70" className="img-fluid rounded shadow-sm" />
                        <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{product.product_name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                        </div>
                    </div>
                    </th>
                    <td className="border-0 align-middle"><strong>₹{product.product_price}</strong></td>
                    <td className="border-0 align-middle">
                      {product.no_of_quantity}
                      {/* <input type='number' value={product.no_of_quantity}  style={{width:'4vw',marginLeft:'1%',marginRight:'1%'}}/> */}
                    </td>
                    <td className="align-middle">
                        {/* <label  className="text-dark bg-warning pl-5 pr-5 pt-2 pb-2" >{product.Status}</label> */}
                        <select defaultValue={product.Status} onChange={(e)=>handleSelectEvent(e,product)} name="cars" id="cars" className='bg-primary text-white p-2'>
                        <option value="Order Pending">Order Pending</option>
                        <option value="Order Confirm">Order confirm</option>
                        <option value="Order In Transition">Order In transition</option>
                        <option value="Order dilivered">Order Dilivered</option>
                        </select>
                    </td>
                </tr>
                ))}</>: 
               <tr>
                  <th scope="row" colSpan='4' style={{textAlign:'center'}}>
                    <h2>You have no orders</h2>
                  </th>
                </tr> 
                }
              </tbody>
            </table>
            </div>
            </div>
            </div>

            <div className="row py-5 p-4 bg-white rounded shadow-sm  d-flex justify-content-center align-items-center">
      </div>
    </div>
        </>
    )
}
