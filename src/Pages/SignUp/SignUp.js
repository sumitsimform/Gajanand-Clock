import React , { useState } from 'react';
import './SignUp.css'; 
import fire  from '../../Components/Firebase';
import history from '../../Components/History';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LoaderModal from '../../Components/Loader/LoaderModal';

const  SignUp = () => {

        const [ Email , setEmail ] = useState('');
        const [ Pass , setPass ] = useState('');
        const [ Confirm_Pass , setRePass ] = useState('');
        const [ Name , setName ] = useState('');
        const [ isSignUp , setIsSignUp ] = useState(null);

    
    function  submitSignUp(){
        if( !(Pass === Confirm_Pass) ){
            alert('Password Not Match...');
            Confirm_Pass = ''
        }else{
            setIsSignUp(1); 
            console.log('=>',Pass,'=>',Confirm_Pass,'=>',Email,'=>',Name);
            fire.auth().createUserWithEmailAndPassword(Email,Pass)
            .then(
            async function () {
              const  CurrentUser = fire.auth().currentUser;
            CurrentUser.sendEmailVerification().then(function() {
            fire.database().ref('Users/'+CurrentUser.uid).set({
                    Full_Name : Name,
                    Email : Email 
            }).then((data)=>{
                     //success callback
                    
                     alert('Sign Up Successful And Verification Link Sent In Your Email...')
                    // this.setState({Confirm_password:'',password:'',Name:'',email:''});
                    // Confirm_Pass='';Pass='';Name='';Email='';
                    setIsSignUp(null);
                    history.push({ 
                            pathname: '/login',
                            });
                    }).catch((error)=>{
                            console.log('error ' , error)
                        })
            }).catch(function(error) {
                                console.log(error);
                                setIsSignUp(null);
                        });
            })
            .catch((error) => {
                console.log('->',error);
                alert(error.message)});
                // setIsSignUp(null);
        }
    
}
        const CssTextField = withStyles((theme)=>({
            root: {
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'yellow',
              },
              '.MuiInputBase-root':{
                // '& fieldset': {
                    color:'white'
                //   },
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  
                  borderColor: '#737373'
                },
                '&:hover fieldset': {
                    borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                    opacity:1
                },
              },
            },
          }))(TextField);
        
        return(
            <div>
                <div className="SignUpOutterTag" >  
                {/* <div className="signUpInnerTag"> */}
                    <div className='SignUpTag'>
                        
                        <div className='SignUp-logo-css'>
                        <Avatar style={{
                                color:'black',
                                backgroundColor:'#f48fb1',
                                height:'50px',
                                width:'50px'
                                }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        </div>

                        <label className='SignUp-header'>Sign Up</label>
                        <div className='SignUp-inputTag'>
                            <CssTextField
                                defaultValue=''
                                variant="outlined"
                                required
                                fullWidth
                                name="Name"
                                label="Full Name"
                                type="text"
                                onChange={(event, value) => setName(value)}
                                InputLabelProps={{style:{color:'white',opacity:0.5}}}
                                InputProps={{ style:{color:"white"} }}
                                />
                        </div>
                        <div className='SignUp-inputTag'>
                            <CssTextField
                                defaultValue=''
                                variant="outlined"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                onChange={(event, value) => setEmail(value)}
                                InputLabelProps={{style:{color:'white',opacity:0.5}}}
                                InputProps={{ style:{color:"white"} }}
                                />
                        </div>
                        <div className='SignUp-inputTag'>
                            <CssTextField
                                defaultValue=''
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                onChange={(event, value) => setPass(value)}
                                InputLabelProps={{style:{color:'white',opacity:0.5}}}
                                InputProps={{ style:{color:"white"} }}
                                />
                        </div>
                        <div className='SignUp-inputTag'>
                            <CssTextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(event, value) => setRePass(value)}
                                InputLabelProps={{style:{color:'white',opacity:0.5}}}
                                InputProps={{ style:{color:"white"} }}
                                />
                        </div>
                        <div className='SignUp-inputTag'>
                            <Button variant="contained" fullWidth={true} color="primary" onClick={submitSignUp}>
                                SIGN UP
                            </Button>
                        </div>
                        <div className='LoginLabelTag'>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                { isSignUp && <LoaderModal text='Sign Up Processing...'  /> }
            </div>
            
        );
    

    
}

export default SignUp;