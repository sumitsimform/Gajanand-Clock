import React from 'react';
import './AddClockPhoto.css';
import { storage , store , timestamp  } from '../../Components/firebase';
import LoaderModel from '../../Components/Loader/LoaderModal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/DeleteForeverRounded';
import history from '../../Components/history';
import AddPhotoHeader from './AddPhotoHeader';
import Swal from 'sweetalert2';
const types = ['image/png' , 'image/jpeg'];


class AddPhoto extends React.Component {
    constructor(props) {
        super(props);
         this.state = { 
             pictures: [] ,
             image : '',
             url : '',
             imageId:null,
             isUpload:null,
             isDelete:null
        };
    }


      uploadImg = (e) => {
        const selected = e.target.files?.[0];
        if(selected && types.includes(selected.type)){
            this.setState({url:'',isUpload:1});
            let url='';
            const image = e.target.files[0];

            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            const collectionRef = store.collection('images');
            uploadTask.on('state_changed',
            (snapshot) => {
                // progress function
            },
            (error) => {
                // error function
                console.log(error);
            },
            async () => {
                // complete function
                await storage.ref('images').child(image.name).getDownloadURL()
                .then((imgUrl) => {
                    console.log(imgUrl);
                    url = imgUrl;
                    this.setState({url : imgUrl});
                    // alert('Image successfully upload...')
                })
                const createAt = timestamp();
                collectionRef.add({ url , createAt }).then(
                    (docRef) => {
                        this.setState({imageId : docRef.id});
                        console.log('IDDD =>',this.state.imageId);
                    }
                );
                alert('Image successfully upload...')
                Swal.fire(
                    'Clock Image upload',
                    'Your Clock Image successfully upload...',
                    'success'
                  );
                this.setState({isUpload:null});
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Not Supported format...',
              })
            this.setState({url:'',isUpload:null});
        }
        console.log('===> ',this.state.url);

    }

    deleteImg = () => {
        console.log('del');
        if( this.state.url){
            this.setState({isDelete:1});
            // storage.refFromURL
            store.collection('images').doc(this.state.imageId).delete().then(()=>{
                console.log('delete');
            }).catch((err)=>{
                console.log(err);
            })
            let image = storage.refFromURL(this.state.url);
            image.delete().then(() => {
                this.setState({isDelete:null , url:'',imageId:null});
                // collectionRef.
                Swal.fire(
                    'Clock Image Delete',
                    'Your Clock Image successfully Delete...',
                    'success'
                  );
                console.log('delete');
            }).catch((error) => {
                console.log(error.message);
            })
        }
    }
    goback = () => {
        history.push({pathname:'/'})
    }

    render(){
        const {isUpload , isDelete, url} = this.state;
        return(
            <>
                <AddPhotoHeader text='Add Clock Photo' clock={true} />  
                <div className='addPhoto-body'>
                    <div className='addPhoto-outter-tag'>              
                        <div className='upload-img-tag'>
                            <input 
                                type="file" 
                                name="uploadfile" 
                                onChange={this.uploadImg} 
                                id="img" 
                                style={{display:'none'}}
                            />
                            <input 
                                type="button" 
                                onClick={this.deleteImg} 
                                id="del" 
                                style={{display:'none'}}
                            />  
                            <div className='show-img-tag'>
                                <img src={url || 'https://via.placeholder.com/400x300'} alt="Upload logo" className={ url ? 'img-tag' : 'default-img-tag'} />
                            </div>                      
                            <div className='btn-tag'>
                                    <Button 
                                        className='upload-btn' 
                                        variant="contained" 
                                        color="primary"
                                        startIcon={<AddIcon />}
                                    >
                                        <label className='btn-text-css' htmlFor="img">Add</label>
                                    </Button>
                                <Button 
                                        className='upload-btn' 
                                        variant="contained" 
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                    >
                                        <label className='btn-text-css' htmlFor='del' >Delete</label>
                                    </Button>
                            </div>
                        </div>
                    </div>
                    { isUpload && <LoaderModel text='Photo Uploading...'  /> }
                    { isDelete && <LoaderModel text='Photo Deleteing...'  /> }
                </div>
            </>
        );
    }
}

export default AddPhoto;



    