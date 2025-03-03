import { useState } from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';

function Subsidies() {
  const [subsidies] = useState([
    {
      id: 1,
      title: 'Organic Farming Initiative',
      amount: '5000',
      deadline: '2024-12-31',
      description: 'Support for transitioning to organic farming methods'
    },
    {
      id: 2,
      title: 'Agricultural Equipment Grant',
      amount: '10000',
      deadline: '2024-06-30',
      description: 'Funding for modern farming equipment'
    }
  ]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Available Subsidies
        </Typography>

        <Grid container spacing={3}>
          {subsidies.map((subsidy) => (
            <Grid item key={subsidy.id} xs={12}>
              <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                  {subsidy.title}
                </Typography>
                <Typography>Amount: ${subsidy.amount}</Typography>
                <Typography>Deadline: {subsidy.deadline}</Typography>
                <Typography paragraph>{subsidy.description}</Typography>
                <Button variant="contained" color="primary">
                  Apply Now
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Subsidies;