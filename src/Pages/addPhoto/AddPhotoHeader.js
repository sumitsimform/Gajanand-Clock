import React from 'react';
import './AddPhotoHeader.css';
import history from '../../Components/history';
function AddPhotoHeader({ text , clock }) {
    const goback = () => {
        // console.log('back');
        history.push({pathname:'/home'});
    }
    return(
        <div className={clock ? 'addclockphoto-header-tag' : 'addframephoto-header-tag' }>
            <div className='first-tag' onClick={goback} >
                <img src={clock ? './white_back.svg' : './black_back.svg'} alt='back icon' />
            </div>
            <div className='middle-tag'>
                <label className='addphoto-header-text'>
                    <strong>{text}</strong>
                </label>
            </div>
            <div className='first-tag'>
            </div>
        </div>
    )

}

export default AddPhotoHeader;