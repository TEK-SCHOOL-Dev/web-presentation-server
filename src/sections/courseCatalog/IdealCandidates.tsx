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

export default function ProgramsAndCourses() {
  return (
    <StyledRoot>
      <Section>
        <Container component={MotionContainer}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Image disabledEffect alt="grid" src="/assets/images/home/section/programmer.png" />

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/section/programmer2.png"
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
                        src="/assets/images/home/section/programmer6.png"
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
                        src="/assets/images/home/section/programmer7.png"
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
                        src="/assets/images/home/section/programmer8.png"
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
                        src="/assets/images/home/section/programmer9.png"
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
                        src="/assets/images/home/section/programmer10.png"
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
                        src="/assets/images/home/section/programmer3.png"
                      />
                    </m.div>
                  </m.div>
                </Box>

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [-5, 10, -5] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/section/programmer4.png"
                      />
                    </m.div>
                  </m.div>
                </Box>

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [-25, 5, -25] }}
                      transition={{ duration: 10, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/section/programmer5.png"
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
                    text="Programs"
                    sx={{
                      color: 'primary.main',
                    }}
                    variants={varFade().inRight}
                  />
                  <TextAnimate
                    text="&"
                    sx={{
                      mx: 1,
                      color: 'primary.main',
                    }}
                    variants={varFade().inRight}
                  />
                  <TextAnimate
                    text="Courses!"
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
                  Understand the qualities and characteristics that make someone an ideal candidate
                  for the SDET program and determine if this program fits you.
                </Typography>
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
                  The ideal candidates for our SDET program are individuals who are passionate about
                  pursuing a career in the software testing industry and are prepared to put in the
                  time and effort to excel.
                </Typography>
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
                  <li>Can commit at least 20 hours per week to study and complete coursework.</li>
                  <li>Are willing to take on the challenge of an intensive, demanding program.</li>
                  <li>Display courage and perseverance in the face of new learning experiences.</li>
                  <li>Possess effective communication and problem-solving skills. </li>
                  <li>Have a strong desire to pursue a career in the IT industry. </li>
                  <li>
                    No prior experience or knowledge in IT is required, as the program is designed
                    to accommodate beginners and build a strong foundation in SDET skills.{' '}
                  </li>
                </Typography>
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
                  If you possess these qualities and are ready to commit to an intensive, rewarding
                  program, our SDET training will provide the skills and knowledge needed to succeed
                  in the software testing industry.
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
