import { Card, CardContent, Typography, Button, Box, LinearProgress } from '@mui/material';

function SubsidyCard({ subsidy }) {
  const { title, provider, amount, deadline, eligibility, progress } = subsidy;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Provider: {provider}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          Amount: ${amount}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Deadline: {deadline}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Eligibility: {eligibility}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Application Progress
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ mb: 2 }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            fullWidth
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SubsidyCard;