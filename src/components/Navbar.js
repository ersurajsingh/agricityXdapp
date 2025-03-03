import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          Agricity
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/marketplace">
            Marketplace
          </Button>
          <Button color="inherit" component={Link} to="/farmers">
            Farmers
          </Button>
          <Button color="inherit" component={Link} to="/subsidies">
            Subsidies
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
