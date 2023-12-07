import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import './Login.css';
import LoginImg from '../../images/Login.gif';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='login'>
            <Container sx={{ py: 6 }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={LoginImg} alt="A girl is logging in a website" />
                    </Grid>
                    <Grid item xs={11} md={5}>
                        <Paper sx={{ px: 3, py: 4 }} elevation="3">
                            <Typography variant='h6' component='h1' sx={{ color: "#527853", mb: 3 }}>
                                Please Log In !!
                            </Typography>
                            <form autoComplete="off">
                                <div>
                                    <TextField required id="user-name-or-email" label="User Name or Email" InputLabelProps={{ shrink: true }} fullWidth size="small" color="primary" />
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