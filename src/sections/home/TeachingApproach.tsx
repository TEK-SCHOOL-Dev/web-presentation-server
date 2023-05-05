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

export default function TeachingApprach() {
  return (
    <StyledRoot>
      <Section>
        <Container component={MotionContainer}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Image disabledEffect alt="grid" src="/assets/images/home/teach-appr/layer_1.png" />

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/teach-appr/layer_2.png"
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
                        src="/assets/images/home/teach-appr/layer_3.png"
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
                        src="/assets/images/home/teach-appr/layer_4.png"
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
                        src="/assets/images/home/teach-appr/layer_5.png"
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
                        src="/assets/images/home/teach-appr/layer_6.png"
                      />
                    </m.div>
                  </m.div>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'inline-flex' }}>
                  <TextAnimate
                    text="Teaching"
                    sx={{
                      color: 'primary.main',
                    }}
                    variants={varFade().inRight}
                  />
                  <TextAnimate
                    text=" "
                    sx={{
                      mx: 1,
                      color: 'primary.main',
                    }}
                    variants={varFade().inRight}
                  />
                  <TextAnimate
                    text="Apprach!"
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
                      theme.palette.mode === 'dark' ? 'common.white' : 'common.black', // Update the color property
                    fontWeight: 'fontWeightMedium',
                    textAlign: 'left',
                    pl: 4,
                    '& li': {
                      paddingBottom: 1,
                    },
                  }}
                >
                  We pride ourselves on our unique and practical teaching approach. Our focus is to
                  ensure that our students receive:
                </Typography>
                <Typography
                  component="ul"
                  sx={{
                    mt: 4,
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? 'common.white' : 'common.black', // Update the color property
                    fontWeight: 'fontWeightMedium',
                    textAlign: 'left',
                    pl: 4,
                    '& li': {
                      paddingBottom: 1,
                    },
                  }}
                >
                  <li>
                    Original Content: We provide students with comprehensive and up-to-date course
                    materials created by our experienced instructors.
                  </li>
                  <li>
                    Real-World Application: Our curriculum emphasizes the practical use of tools and
                    technologies, preparing students to tackle real-life challenges in the tech
                    industry.
                  </li>
                  <li>
                    Job Readiness: We ensure that by the end of the course, students are equipped
                    with the skills and knowledge needed to excel in their chosen career paths.
                  </li>
                </Typography>
                <Typography
                  component="ul"
                  sx={{
                    mt: 4,
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? 'common.white' : 'common.black', // Update the color property
                    fontWeight: 'fontWeightMedium',
                    textAlign: 'left',
                    pl: 4,
                    '& li': {
                      paddingBottom: 2,
                    },
                  }}
                >
                  Discover how our teaching approach sets us apart by exploring our Teaching
                  Approach Page.
                </Typography>
                <m.div
                  variants={varFade().inRight}
                  style={{
                    display: 'flex', // Add this line to use Flexbox
                    justifyContent: 'flex-end', // Add this line to align the button to the left
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
          </Grid>
        </Container>
      </Section>
    </StyledRoot>
  );
}
