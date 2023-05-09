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

export default function OurImpact() {
  return (
    <StyledRoot>
      <Section>
        <Container component={MotionContainer}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'inline-flex' }}>
                  <TextAnimate
                    text="Our "
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
                    text="Impact!"
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
                  TEK SCHOOL is dedicated to making a difference in the lives of our students and
                  the tech industry. Here are some of the ways we&apos;ve achieved this:
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
                  <li>
                    Empowering Individuals: We have helped hundreds of students secure their dream
                    jobs in the tech sector, enabling them to transform their lives.
                  </li>
                  <li>
                    Supporting Underrepresented Communities: A majority of our students come from
                    communities that lack access to formal education, and we provide them with
                    opportunities to excel in the tech industry.
                  </li>
                  <li>
                    Bringing Jobs Back: Our efforts have contributed to reclaiming a portion of
                    high-paying tech jobs that were previously outsourced, benefiting the US
                    economy.
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
                  Learn more about the impact we&apos;re making by visiting Our Story page.
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
                    Our Story
                  </Button>
                </m.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative ', zIndex: 0 }}>
                <Image disabledEffect alt="grid" src="/assets/images/home/stay-up/layer_5.png" />

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/stay-up/layer_1.png"
                      />
                    </m.div>
                  </m.div>
                </Box>

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ x: [25, -25, 25] }}
                      transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/stay-up/layer_2.png"
                      />
                    </m.div>
                  </m.div>
                </Box>

                <Box sx={{ position: 'absolute', top: 0 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [0, -35, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/stay-up/layer_3.png"
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
                        src="/assets/images/home/stay-up/layer_4.png"
                      />
                    </m.div>
                  </m.div>
                </Box>
                <Box sx={{ position: 'absolute', top: -20, zIndex: -1 }}>
                  <m.div variants={varFade().inDown}>
                    <m.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Image
                        disabledEffect
                        alt="sidebar"
                        src="/assets/images/home/stay-up/layer_6.png"
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
