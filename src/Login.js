import React from 'react'
import './App.css'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';

  
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
 const Login = () => {
  return (
    <div className='main-container'>
        <div className='inner-container'>
        <Box className='inside' >
      
      
      <FormControl  variant="standard">
        
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" />
      </Box>
      </FormControl>
      
      
      <FormControl variant="standard">
        
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockIcon sx={{ color: 'action.active',mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" />
      </Box>

      </FormControl>
<Box className='reme'>
<p > <lable className='left'>Remember me</lable> <lable className='right'>Forgot password</lable></p>

</Box>
    <Box className='successbutton'>
    <Button className="label" variant="contained" color="error">
        Success
      </Button>
    </Box>
      <p className='sign'>Don't have an account?<b> Sign up</b></p>
 <p><Link to='/shop'>Click me</Link></p>
    </Box>
    
        </div>
    </div>
  )
}

export default Login;
