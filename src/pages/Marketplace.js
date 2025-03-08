import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, TextField, Box, Button } from '@mui/material';

const Marketplace = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Mock data to replace blockchain interaction
      const fetchedProducts = [
        {
          id: 0,
          name: 'Product 1',
          farmer: 'Farmer A',
          price: '10.00',
          description: 'Description of Product 1',
          quantity: 100
        },
        {
          id: 1,
          name: 'Product 2',
          farmer: 'Farmer B',
          price: '20.00',
          description: 'Description of Product 2',
          quantity: 50
        }
      ];
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const purchaseProduct = (productId) => {
    // Implement purchase logic here
  };

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
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Farmer: {product.farmer}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>Quantity: {product.quantity}</Typography>
                <Button variant="contained" color="primary" size="small" onClick={() => purchaseProduct(product.id)}>
                  Purchase
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Marketplace;
