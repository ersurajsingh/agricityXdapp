import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Agricity
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Empowering farmers through blockchain technology
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Direct-to-Consumer</Typography>
            <Typography paragraph>
              Connect directly with consumers and sell your products without intermediaries
            </Typography>
            <Button variant="contained" component={Link} to="/marketplace">
              Visit Marketplace
            </Button>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Subsidy Assistance</Typography>
            <Typography paragraph>
              Access and manage agricultural subsidies transparently
            </Typography>
            <Button variant="contained" component={Link} to="/subsidies">
              View Subsidies
            </Button>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Farmer Community</Typography>
            <Typography paragraph>
              Connect with other farmers and share experiences
            </Typography>
            <Button variant="contained" component={Link} to="/farmers">
              Meet Farmers
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;