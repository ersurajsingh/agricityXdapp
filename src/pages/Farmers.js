import { useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

function Farmers() {
  const [farmers] = useState([
    {
      id: 1,
      name: 'John Smith',
      location: 'California, USA',
      specialization: 'Organic Vegetables',
      experience: '15 years'
    },
    {
      id: 2,
      name: 'Mary Johnson',
      location: 'Iowa, USA',
      specialization: 'Corn and Soybeans',
      experience: '20 years'
    }
  ]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Our Farmers
        </Typography>

        <Grid container spacing={3}>
          {farmers.map((farmer) => (
            <Grid item key={farmer.id} xs={12} sm={6}>
              <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                  {farmer.name}
                </Typography>
                <Typography>Location: {farmer.location}</Typography>
                <Typography>Specialization: {farmer.specialization}</Typography>
                <Typography>Experience: {farmer.experience}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Farmers;