import './Home.css';
import successImg from '../../images/Achievement.gif';
import { Button, Container, Grid, Typography } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Container sx={{ py: 6 }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} md={4} align="center">
                        <img src={successImg} alt="successfully logged in" width="100%" />
                    </Grid>
                </Grid>
                <Typography variant='h6' align='center' color='secondary'>
                    Congratulation !!
                    <br />
                    Log in process completed successfully
                </Typography>
                <Typography align='center' sx={{mt:2}}>
                    <Button type="button" variant="contained" color='primary'>Log Out</Button>
                </Typography>
            </Container>
        </div>
    );
};

export default Home;