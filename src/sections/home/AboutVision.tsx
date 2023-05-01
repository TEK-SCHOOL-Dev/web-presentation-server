import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image src="/assets/images/about/vision.jpg" alt="about-vision" sx={{ filter: 'brightness(0.7)' }} />

          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              backdropFilter: 'blur(4px)',
              padding: '2rem',
              borderRadius: '0.5rem',
              maxWidth: '80%',
            }}
          >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Learn more about TEK School,
          </Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>
            our team, and our mission.
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, lineHeight: 1.5 }}>
            We are committed to providing quality education and helping you achieve your career goals.
          </Typography>
          <Typography variant="h5" sx={{ lineHeight: 1.5 }}>
            Check out our media coverage page to see how TEK School is making an impact in the tech industry.
          </Typography>
        </Stack>
      </Box>

      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              We are committed to providing quality education and helping you achieve your career goals.
        </Typography>
      </m.div>
    </Container>
  );
}
