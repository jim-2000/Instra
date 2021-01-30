import React, { useEffect, useState } from 'react';

// import { Avatar } from '@material-ui/core';
import { Button, Input, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../asset/img/font.png'
import './Header.css'

import {auth} from '../../firebase'

// >>>>>>>>>>>>>>>> MUI Style


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));



// >>>>>>>>>>>>>>>>>>>>>>>>>>> main component 
const Header = () => {
  const [openSignIn, setopenSignIn] = useState(false)
    const [open, setOpen] = useState(false)
    const [modalStyle] = useState(getModalStyle)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Username, setUsername] = useState('')
    const [user, setUser] = useState(null)
//>>>>>>>> usestate 
const classes = useStyles()
//>>>>>>>> sign up added by firebase 
useEffect(() => {
const unsubscribe = auth.onAuthStateChanged((authUser => {
   if (authUser){
      // User is loged in
      console.log(authUser)
      setUser(authUser)
  
   }else{
// useer has logged out 
    setUser(null);
   }
 })); 
 return() => {
   // perform some clean actions
   unsubscribe()
 }

}, [user, Username]);

const Signup = (event) => {
  event.preventDefault();
  auth.createUserWithEmailAndPassword(Email, Password)// This email and password is state
  .then((authUser)=>{
   return authUser.user.updateProfile({
      displayName: Username,
      
    })
  } )
  .catch((error)=> alert(error.massage) )

  setOpen(false)
}
// sing in form
const submitHandle =(e)=> {
  e.preventDefault()
  
}
// open 
const handleOpen = (e) => {
  e.preventDefault()
  setOpen(false)
}
// sing In form 
const SingIn = (event) => {
  event.preventDefault();
  auth.signInWithEmailAndPassword(Email, Password)
  .catch((error)=> alert(error.message))
  setopenSignIn(false)
}

//>>>>>>>>>>>>>>>> Return
return (
        <div className="header">
            <div className="app_header">
            {/* Sign in modal  */}
                <Modal 
                open={open}
                onClose={handleOpen}
                >
              
            <div style={modalStyle} className={classes.paper} >
               
                <form onSubmit={submitHandle} className="app_signup">
                  <center>
                      <img
                        src={logo}
                        className="app_header_logo"
                        alt="logo"
                        /> 
                     </center>
                      <Input
                      placeholder="Username"
                      value={Username}
                      onChange= {(e) => setUsername(e.target.value)}
                      />
                      <Input
                      placeholder="Email"
                      value={Email}
                      onChange= {(e) => setEmail(e.target.value)}
                      />

                      <Input
                      placeholder="Password"
                      type="password"
                      value={Password}
                      onChange= {(e) => setPassword(e.target.value)}

                      />
                      <Button color="primary" type="submit" onClick={Signup}>
                      Signup</Button>
                     
                  </form>

                      
                </div>

                </Modal>
                
                            {/* Sing up modal  */}
              <Modal 
                open={openSignIn}
                onClose={()=> setopenSignIn(false)}
                >
              
            <div style={modalStyle} className={classes.paper} >
               
                <form onSubmit={submitHandle} className="app_signup">
                  <center>
                      <img
                        src={logo}
                        className="app_header_logo"
                        alt="logo"
                        /> 
                     </center>
                      <Input
                      placeholder="Email"
                      value={Email}
                      onChange= {(e) => setEmail(e.target.value)}
                      />

                      <Input
                      placeholder="Password"
                      type="password"
                      value={Password}
                      onChange= {(e) => setPassword(e.target.value)}

                      />
                      <Button color="primary" type="submit" onClick={SingIn}>
                      Signup</Button>
                     
                  </form>

                      
                </div>

                </Modal>
                <img
                src={logo}
                className="app_header_logo"
                alt="logo"
                /> 
                {
                  user ? (
                    <Button color="secondary" onClick={()=> auth.signOut() }>
                    Log Out</Button>
                  ): (
                  <div className="app_logContainer">
                      <Button color="primary" onClick={()=> setopenSignIn(true) }>
                    log in</Button>
                     <Button color="primary" onClick={()=> setOpen(true) }>
                     Sign Up</Button>
                  </div>

                  )
                }
               
               
            </div>        
        </div>
    );
};

export default Header;