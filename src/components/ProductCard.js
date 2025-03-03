import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

function ProductCard({ product }) {
  const { name, farmer, price, image, description } = product;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={image || 'https://via.placeholder.com/200'}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          By {farmer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary">
            ${price}
          </Typography>
          <Button variant="contained" color="primary" size="small">
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;