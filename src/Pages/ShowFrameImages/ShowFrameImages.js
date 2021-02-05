import React , { useState } from 'react';
import './ShowFrameImages.css';
import useStore from '../../Components/hooks/useStore';
import {Button} from 'react-bootstrap';
import { isLoading } from '../../Components/hooks/useStore'
import LoaderModel from '../../Components/Loader/LoaderModal';

function ShowFrameImages({ text ,styles}) {


    const [numOfImg,setNumOfImg] = useState(4);
    const { docs } = useStore('Frame');


    const ShowMoreImg = () => {
        setNumOfImg(numOfImg+2);
    }

    return(
        <div className='show-frame-body'>
            <div className='show-frame-header'>
                <label className='Show-frame-header-text'><strong>Frame Modal</strong></label>
            </div>
            <div className='show-frame-tag'>
                <div className='frame-img-grid'>
                    { docs && docs.slice(0,numOfImg).map(doc => (
                        <div className='frame-img-wrap' key={doc.id}>
                            <img src={doc.url} alt='uploaded pic' />
                        </div>
                ))}
                </div>
                { isLoading  && <LoaderModel text='Photo loading...'  /> }
            </div>
            <div className='view-more-btn-tag'>
                { numOfImg < docs.length && 
                <Button variant="primary" size="lg" onClick={ShowMoreImg}>View More</Button>
                }
            </div>
        </div>
    )
}

export default ShowFrameImages;