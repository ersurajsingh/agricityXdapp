import { Card, CardContent, CardMedia, Typography, Button, Rating, Box } from '@mui/material';

function FarmerCard({ farmer }) {
  const { name, location, image, rating, products, description } = farmer;

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
          {location}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={rating} readOnly precision={0.5} />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({rating})
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Products: {products.join(', ')}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" color="primary" size="small">
            View Profile
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FarmerCard;