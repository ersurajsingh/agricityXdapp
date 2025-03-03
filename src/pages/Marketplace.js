import { useState } from 'react';
import { Container, Typography, Grid, TextField, Box } from '@mui/material';

function Marketplace() {
  const [products] = useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      farmer: 'John Smith',
      price: 2.99,
      description: 'Fresh organic tomatoes',
      quantity: '1 kg'
    },
    {
      id: 2,
      name: 'Fresh Corn',
      farmer: 'Mary Johnson',
      price: 1.99,
      description: 'Sweet corn freshly harvested',
      quantity: '5 pieces'
    }
  ]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Marketplace
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Search products"
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Box>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              {/* Product cards will be implemented separately */}
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Farmer: {product.farmer}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>Quantity: {product.quantity}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Marketplace;