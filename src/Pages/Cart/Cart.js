import React, {useEffect, useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import firebase from '../../Components/Firebase'
export default function Cart() {
const [data,setData] = useState([])
const [totalPrice,setTotalPrice] = useState(0)
    useEffect(() => {
        const  CurrentUser = firebase.auth().currentUser;
        console.log('INNNNNNNN=>',CurrentUser)
        let total = 0
        if(CurrentUser){
            var starCountRef = firebase.database().ref(`Users/${CurrentUser.uid}/Cart`);
            starCountRef.on('value', (snapshot) => {
            setData(snapshot.val())
            console.log("DATA ==>",snapshot.val())
            if(snapshot.val() !== null){
              console.log('==============');
              Object.values(snapshot.val()).map((product)=>{
                total = total +  ( product.product_price*product.no_of_quantity)
                console.log('TOTAL=====>',total)
              })
              setTotalPrice(total)
            }
              
            });

        }
    },[])

    const handleRemoveItem = (product_name,product_price,no_of_quantity) => {
      const  CurrentUser = firebase.auth().currentUser;
      setTotalPrice( totalPrice-(product_price*no_of_quantity) )
      firebase.database().ref(`Users/${CurrentUser.uid}/Cart/${product_name}`).remove();
    }

    return (
        <>
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
                    <div className="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                  {/* {console.log('DATA RENDER =>',data,Object.values(data))} */}
                {data ? 
                <> 
                {Object.values(data).map((product)=>(
                    <tr>
                        {/* { setTotalPrice(totalPrice+(product.product_price*product.no_of_quantity)) } */}
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
                      {/* <button className="btn btn-primary">+</button> */}
                      <input type='number' value={product.no_of_quantity}  style={{width:'3vw',marginLeft:'1%',marginRight:'1%'}}/>
                      {/* <button className='btn btn-danger'>-</button> */}
                    </td>
                    <td className="border-0 align-middle" onClick={() => handleRemoveItem(product.product_name,product.product_price,product.no_of_quantity)}><DeleteIcon /></td>
                </tr>
                ))}</>: 
               <tr>
                  <th scope="row" colSpan='4' style={{textAlign:'center'}}>
                    <h2>Cart Is Empty</h2>
                  </th>
                </tr> 
                }

              </tbody>
            </table>
            </div>
            </div>
            </div>

            <div className="row py-5 p-4 bg-white rounded shadow-sm  d-flex justify-content-center align-items-center">
        {/* <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <div class="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0"/>
              <div class="input-group-append border-0">
                <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" class="form-control"></textarea>
          </div>
        </div> */}
        <div className="col-lg-6">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div className="p-4">
            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>₹{totalPrice}</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
              {/* <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li> */}
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">$400.00</h5>
              </li>
            </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
          </div>
        </div>
      </div>
    {/* </div> */}
    </div>
        </>
    )
}
