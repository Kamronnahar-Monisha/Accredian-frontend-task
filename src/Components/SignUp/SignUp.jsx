import {Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import './SignUp.css';
import signUpImg from '../../images/Sign up.gif';
import { Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {

    const navigate = useNavigate();


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // checking for equality of password and confirmPassword
        if (password !== confirmPassword) {
            toast.error('Password and Confirm Password should be same !');
            return;
        }

        const user = {
            userName,
            email,
            password
        };

        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledge) {
                    form.reset();
                    toast.success('Sign up completed Successfully. Please login');
                    navigate('/login');
                }
                else{
                    toast.error('There is already exist an account with this email');
                    return;
                }
            });
    }

    return (
        <div className='sign-up'>
            <Container sx={{ py: 6 }}>
                <Grid container spacing={3} justifyContent="space-around" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={signUpImg} width="100%" alt="A girl is signing in a website" />
                    </Grid>
                    <Grid item xs={11} md={5}>
                        <Paper sx={{ px: 3, py: 4 }} elevation="3">
                            <Typography variant='h6' component='h1' sx={{ color: "#527853", mb: 3 }}>
                                Please Sign Up !!
                            </Typography>
                            <form autoComplete="off" width="100%" onSubmit={handleSignUp} >
                                <div>
                                    <TextField required id="user-name" name="userName" label="User Name" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" />
                                </div>
                                <br />
                                <div>
                                    <TextField required id="email" name="email" label="Email" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" type='email' />
                                </div>
                                <br />
                                <div>
                                    <TextField required id="password" name="password" label="Password" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" type='password' />
                                </div>
                                <br />
                                <div>
                                    <TextField required id="confirm-password" name="confirmPassword" label="Confirm Password" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" type='password' />
                                </div>
                                <br />
                                <div>
                                    <Button type="submit" variant="contained" color='primary' fullWidth>Sign Up</Button>
                                </div>
                            </form>
                            <br />
                            <Typography variant="body2" align="center" color="secondary">
                                Already have an account? Please <Link to='/login' className='link-style-none'><Typography component="body2" color="primary" >Login</Typography></Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SignUp;