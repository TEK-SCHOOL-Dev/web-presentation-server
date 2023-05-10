import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { m, motion, useAnimation } from 'framer-motion';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Iconify from '../../components/iconify';

import Image from '../../components/image';

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.common.white,
}));

const Section = styled('section')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  minHeight: '100vh', // Add this line
  display: 'flex', // Add this line
  alignItems: 'center', // Add this line
  justifyContent: 'center', // Add this line
  backgroundColor: theme.palette.background.default,
}));

const SubSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%', // Add this line
  textAlign: 'center',
}));

interface Resource {
  id: string;
}

export default function Resources({ id }: Resource) {
  return (
    <StyledRoot>
      <Section id={id}>
        <Container component={MotionContainer}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'inline-flex' }}>
                  <TextAnimate
                    text="Resources"
                    sx={{
                      color: 'primary.main',
                    }}
                    variants={varFade().inRight}
                  />
                </Box>
                <Typography
                  component="ul"
                  sx={{
                    mt: 4,
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'text.secondary' : 'common.white', // Update the color property
                    fontWeight: 'fontWeightMedium',
                    textAlign: 'left',
                    pl: 4,
                    '& li': {
                      paddingBottom: 2,
                    },
                  }}
                >
                  <li>
                    Discover our range of resources, including learning resources, career resources,
                    and community forums.
                  </li>
                  <li>We provide the tools and support you need to succeed in your tech career.</li>
                  <li>
                    Check out our certification verification page to showcase your skills
                    topotential employers.
                  </li>
                </Typography>
                <m.div
                  variants={varFade().inRight}
                  style={{
                    display: 'flex', // Add this line to use Flexbox
                    justifyContent: 'flex-start', // Add this line to align the button to the left
                    marginTop: '1rem',
                  }}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
                  >
                    Learn More
                  </Button>
                </m.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Image disabledEffect alt="grid" src="/assets/images/home/resources/layer_1.png" />

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/resources/layer_2.png"
                      />
                    </m.div>
                  </m.div>
                </Box>

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/resources/layer_3.png"
                      />
                    </m.div>
                  </m.div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </StyledRoot>
  );
}
