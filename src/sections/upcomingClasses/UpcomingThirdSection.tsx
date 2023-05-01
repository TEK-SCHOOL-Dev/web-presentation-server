import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSpring, animated } from '@react-spring/web';
import Logo from './img/logo.png';

const StyledRoot = styled('div')(({ theme }) => ({
  height: '500px',
  backgroundColor: 'primary.main',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  transition: 'box-shadow 0.3s ease-out, transform 0.3s ease-out, border-color 0.3s ease-out',

  '&:hover': {
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-10px)',
    borderColor: theme.palette.primary.main,
    transition: 'box-shadow 0.3s ease-out, transform 0.3s ease-out, border-color 0.3s ease-out',
  },
}));

export default function MySection() {
  const card1Animation = useSpring({
    from: { opacity: 0, transform: 'translate3d(-50px,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { tension: 200, friction: 20 },
    delay: 700,
  });

  const card2Animation = useSpring({
    from: { opacity: 0, transform: 'translate3d(50px,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { tension: 200, friction: 20 },
    delay: 700,
  });

  return (
    <StyledRoot>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <animated.div style={card1Animation}>
              <StyledCard>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box
                    mb={2}
                    sx={{
                      borderRadius: '50%',
                      border: `2px solid`,
                      padding: '15px',
                      color: 'primary.main',
                    }}
                  >
                    <img src={Logo} alt="Logo" width="70" height="70" />
                  </Box>
                  <Box mb={2}>
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{ textAlign: 'center', color: 'primary.main' }}
                    >
                      Card 1
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
                  Explore all of our upcoming programs in programming, web development,
                  cybersecurity, data science and more.
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Box>
              </StyledCard>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <animated.div style={card2Animation}>
              <StyledCard>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box
                    mb={2}
                    sx={{
                      borderRadius: '50%',
                      border: `2px solid`,
                      padding: '15px',
                      color: 'primary.main',
                    }}
                  >
                    <img src={Logo} alt="Logo" width="70" height="70" />
                  </Box>
                  <Box mb={2}>
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{ textAlign: 'center', color: 'primary.main' }}
                    >
                      Card 2
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
                  Explore all of our upcoming programs in programming, web development,
                  cybersecurity, data science and more.
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Box>
              </StyledCard>
            </animated.div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
