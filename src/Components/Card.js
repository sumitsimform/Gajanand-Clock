import React, { useEffect } from 'react'
import './Card.css'
import history from './History'
export default function Card({state}) {
    useEffect(()=>{
        console.log('state ===>',state)
    },[])
    const handleBuyNowEvent = ( ) => {
        console.log('select===>',state)
        history.push({
                        pathname:'/ShowProductDetails',
                        state:{state}
                    })
    }
    return (
        <div className='card-tag'>
            <div className='card'>
                
                <div className='imgBx'> 
                    <img src={state.url} />
                </div>
                {/* <div style={{position:'relative',height:'50px'}}></div> */}
                <div className='contentBx'>
                    <h3>Simple Design Clock</h3>
                    <h2 className='price'>₹ 560</h2>
                    <button  onClick={handleBuyNowEvent} className='buy'>Buy Now</button>
                </div>

            </div>
        </div>
    )
}
