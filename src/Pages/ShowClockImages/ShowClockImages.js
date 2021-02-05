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
                        <div className='img-wrap' key={doc.id}>
                            <img src={doc.url} alt='uploaded pic' />
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