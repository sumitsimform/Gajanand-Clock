import React, {useEffect,Component, useState} from 'react'
import { FormControl , FormLabel } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import AddPhotoHeader from '../AddPhoto/AddPhotoHeader'
export default function EditProductDetails(props) {
    const location = useLocation();
    const [productName,setProductName] = useState('')
    const [productPrice,setProductPrice] = useState(0  )
    const [productDetail,setProductDetail] = useState('')
    const [productType,setProductType] = useState('')
    useEffect(()=>{
        console.log('PROPS ==>',location.state.doc)
        if(location.state.doc){
            setProductName(location.state.doc.productName)
            setProductDetail(location.state.doc.productDetail)
            setProductPrice(location.state.doc.productPrice)
            setProductType(location.state.doc.productType)
        }
    },[])
    const updateProductDetails = () => {
      console.log('UPDATE PRODUCT DETAILS')
    }
    return (
        <>
        {/* <AddPhotoHeader text='Add Clock Photo' clock={true} />   */}
        {/* <div className='addPhoto-body'>
            <div>
                <FormLabel className='label-css' >Product Name</FormLabel>
                <FormControl type="text" size='lg' placeholder=""  />                            
            </div>
            <div className='mt-2'>
                <FormLabel className='label-css' >Product Details</FormLabel>
                <FormControl type="text" size='lg' placeholder="" />                            
            </div>
            <div className='mt-2'>
                <FormLabel className='label-css' >Product Type</FormLabel><br/>                    
                <select class="form-select form-select-lg  mb-2" aria-label=".form-select-lg example" >
                    <option selected>Select Product Type</option>
                    <option value="Clock">Clock</option>
                    <option value="Frame">Frame</option>
                </select>
            </div>
            <div className='mt-2'>
                <FormLabel className='label-css' >Product Price</FormLabel>
                <FormControl type="number" size='lg' placeholder="" />                            
            </div>
            <div class="mt-4">
                <button class="btn btn-warning" style={{width:'100%'}} type="button" >Update Product Details</button>
            </div>
        </div> */}
    <AddPhotoHeader text='Edit Product Details' clock={true} />
    <div className="container mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Product Details</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={productName}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Details"
              name="username"
              value={productDetail}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="phone"
              value={productPrice}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
                {console.log('====>',productType)}
                <select className="form-select form-select-lg  mb-2" aria-label=".form-select-lg example" value={productType} disabled >
                    <option >Select Product Type</option>
                    <option value="Clock">Clock</option>
                    <option value="Frame">Frame</option>
                </select>
          </div>
          {/* <div className="form-group">
            <input type="file" style={{color:'black'}} className="form-control-file" id="exampleFormControlFile1"></input>
          </div> */}
          <button className="btn btn-warning btn-block" onClick={updateProductDetails}>Update Product Details</button>
      </div>
    </div>
    </>
    )
}


// import React, { Component } from 'react'

// export default class EditProductDetails extends Component {
    
//     constructor(props){
//         super(props)
//     }
//     componentDidMount(){
//         console.log('PROPS=>',this.props)
//     }
//     render() {
//         return (
//             <>
//         <div className="container">
//           <div className="w-75 mx-auto shadow p-5">
//             <h2 className="text-center mb-4">Edit Product Details</h2>
//             <form >
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Product Name"
//                   name="name"
//                 //   value={name}
//                 //   onChange={e => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Product Details"
//                   name="username"
//                 //   value={username}
//                 //   onChange={e => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Product Price"
//                   name="phone"
//                 //   value={phone}
//                 //   onChange={e => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                     <select className="form-select form-select-lg  mb-2" aria-label=".form-select-lg example" >
//                         <option selected>Select Product Type</option>
//                         <option value="Clock">Clock</option>
//                         <option value="Frame">Frame</option>
//                     </select>
//               </div>
//               <div className="form-group">
//                 <input type="file" style={{color:'black'}} className="form-control-file" id="exampleFormControlFile1"></input>
//               </div>
//               <button className="btn btn-warning btn-block">Update Product Details</button>
//             </form>
//           </div>
//         </div>
//         </>
//         )
//     }
// }
