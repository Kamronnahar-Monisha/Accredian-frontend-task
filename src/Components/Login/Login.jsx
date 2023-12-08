import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import './Login.css';
import LoginImg from '../../images/Login.gif';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            email,
            password
        };

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.acknowledge) {
                    toast.success('Log in process completed successfully');
                    navigate('/home');
                }
                else {
                    if(data.message === 'Wrong Password'){
                        toast.error('Password was incorrect');
                    }
                    else if(data.message === 'Account does not exist'){
                        toast.error('There is no account with this email');
                    }
                    return;
                }
            });
    }


    return (
        <div className='login'>
            <Container sx={{ py: 6 }}>
                <Grid container spacing={3} justifyContent="space-around" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={LoginImg} width="100%" alt="A girl is logging in a website" />
                    </Grid>
                    <Grid item xs={11} md={5}>
                        <Paper sx={{ px: 3, py: 4 }} elevation="3">
                            <Typography variant='h6' component='h1' sx={{ color: "#527853", mb: 3 }}>
                                Please Log In !!
                            </Typography>
                            <form autoComplete="off" width="100%" onSubmit={handleLogin}>
                                <div>
                                    <TextField required id="email" label="Email" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" />
                                </div>
                                <br />
                                <div>
                                    <TextField required id="password" label="Password" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" type='password' />
                                </div>
                                <br />
                                <div>
                                    <Button type="submit" variant="contained" color='primary' fullWidth>Log IN</Button>
                                </div>
                            </form>
                            <br />
                            <Typography variant="body2" align="center" color="secondary">
                                Don't have a account ? Please <Link to='/sign-up' className='link-style-none'><Typography component="body2" color="primary" >Sign Up</Typography></Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;