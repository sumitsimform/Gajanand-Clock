import React, { useEffect } from 'react'
import './Card.css'
export default function Card({state}) {
    useEffect(()=>{
        console.log('state ===>',state)
    },[])
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
                    <a href='#' className='buy'>Buy Now</a>
                </div>

            </div>
        </div>
    )
}
