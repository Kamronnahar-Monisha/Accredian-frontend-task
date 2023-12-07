import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import './SignUp.css';
import signUpImg from '../../images/Sign up.gif';
import { Link } from 'react-router-dom';

const SignUp = () => {

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
                            <form  autoComplete="off" width="100%">
                                <div>
                                    <TextField required id="user-name" label="User Name" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" />
                                </div>
                                <br />
                                <div>
                                    <TextField required id="email" label="Email" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" type='email' />
                                </div>
                                <br />
                                <div>
                                    <TextField required id="password" label="Password" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" type='password' />
                                </div>
                                <br />
                                <div>
                                    <TextField required id="confirm-password" label="Confirm Password" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" type='password' />
                                </div>
                                <br/>
                                <div>
                                    <Button type="submit" variant="contained" color='primary' fullWidth>Sign Up</Button>
                                </div>
                            </form>
                            <br/>
                            <Typography variant="body2" align="center" color="secondary">
                            Already have an account? Please <Link to='/login'className='link-style-none'><Typography component="body2" color="primary" >Login</Typography></Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SignUp;