import React , { useState } from 'react';
import './ShowClockImages.css';
import useStore from '../../Components/hooks/useStore';
import {Button} from 'react-bootstrap';
import { isLoading } from '../../Components/hooks/useStore'
import LoaderModel from '../../Components/Loader/LoaderModal';

function ShowClockImages() {


    const [numOfImg,setNumOfImg] = useState(5);
    const { docs } = useStore('images');


    const ShowMoreImg = () => {
        setNumOfImg(numOfImg+2);
    }

    return(
        <div className='show-clock-body'>
            <div className='show-clock-header'>
                <label className='Show-Clock-header-text'><strong>Clock Modal</strong></label>
            </div>
            <div className='show-clock-tag'>
                <div className='clock-img-grid'>
                    { docs && docs.slice(0,numOfImg).map(doc => (
                        // <div className='img-wrap' key={doc.id}>
                        //     <img src={doc.url} alt='uploaded pic' />
                        // </div>
                        <div className="card_layout"  key={doc.id}>
                            {
                                console.log('id===>',doc)
                            }
                            <div className="card__inner">
                                <div className="card__face card__face--front ">
                                    <img src={doc.url} alt='uploaded pic' />
                                    {/* <img src="./logo192.png" alt="" className="pp" /> */}
                                </div>
                                <div className="card__face card__face--back">
                                    <div className="card__content">
                                        <div className="card__header">
                                            <img src={doc.url} alt='uploaded pic' />
                                            {/* <img src="./logo192.png" alt="" className="pp" /> */}
                                            {/* <h2>Tyler Potts</h2> */}
                                        </div>
                                        <div className="card__body">
                                            <h3>Clock Number</h3>
                                            <button className='btn btn-primary' style={{width:'100%'}} onClick={()=>console.log('ADD2')}>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                </div>
                { isLoading  && <LoaderModel text='Photo loading...'  /> }
            </div>
            <div className='btn-tag'>
                { numOfImg < docs.length && 
                <Button variant="primary" size="lg" onClick={ShowMoreImg}>View More</Button>
                }
            </div>
        </div>
    )
}

export default ShowClockImages;