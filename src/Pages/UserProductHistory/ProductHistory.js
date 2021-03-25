import React, {useEffect, useState} from 'react'
import Header from '../AddPhoto/AddPhotoHeader'
import firebase from '../../Components/Firebase'
export default function Cart() {
const [data,setData] = useState([])
const [totalPrice,setTotalPrice] = useState(0)
    useEffect(() => {
        const  CurrentUser = firebase.auth().currentUser;
        console.log('INNNNNNNN=>',CurrentUser)
        // let total = 0
        if(CurrentUser){
            var starCountRef = firebase.database().ref(`Users/${CurrentUser.uid}/History`);
            starCountRef.on('value', (snapshot) => {
            setData(snapshot.val())
            console.log("History DATA ==>",snapshot.val())
            // if(snapshot.val() !== null){
            //   console.log('==============');
            //   Object.values(snapshot.val()).map((product)=>{
            //     total = total +  ( product.product_price*product.no_of_quantity)
            //     console.log('TOTAL=====>',total)
            //   })
            //   setTotalPrice(total)
            // }
              
            });

        }
    },[])

    return (
        <>
        {/* <label>LOL</label> */}
        <Header text={'Order History'} />
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
                    <td class="align-middle"><label  className="text-dark bg-warning pl-5 pr-5 pt-2 pb-2" >{product.Status}</label></td>
                </tr>
                ))}</>: 
               <tr>
                  <th scope="row" colSpan='4' style={{textAlign:'center'}}>
                    <h2>You have no orders</h2>
                    <h6>Start Shopping</h6>
                  </th>
                </tr> 
                }
                {/* <tr>
                  <th scope="row">
                    <div class="p-2">
                      <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-2_qxjis2.jpg" alt="" width="70" class="img-fluid rounded shadow-sm" />
                      <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">Gray Nike running shoe</a></h5><span class="text-muted font-weight-normal font-italic">Category: Fashion</span>
                      </div>
                    </div>
                    </th>
                    <td class="align-middle"><strong>$79.00</strong></td>
                    <td class="align-middle"><strong>3</strong></td>
                    <td class="align-middle"><label href="#" className="text-dark bg-warning pl-5 pr-5 pt-2 pb-2" >Panding</label>
                    </td>
                </tr> */}
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
