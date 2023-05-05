import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import { m, motion, useAnimation } from 'framer-motion';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Image from '../../components/image';

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.common.white,
}));

const Section = styled('section')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.background.default,
}));

const SubSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
}));

const StyledCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(5),
  textAlign: 'center',
  height: '100%',
  transition: 'all 0.3s ease-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-5px)',
  },
  '& img': {
    marginBottom: theme.spacing(3),
    borderRadius: '50%',
  },
  backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.common.white,
  boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
}));

export default function HomePic() {
  return (
    <StyledRoot>
      <Section>
        <Container component={MotionContainer}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <TextAnimate
                  text="Stay Up-to-Date"
                  sx={{
                    color: 'primary.main',
                  }}
                  variants={varFade().inRight}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? 'common.white' : 'common.black', // Update the color property
                    fontWeight: 'fontWeightMedium',
                  }}
                >
                  Stay up-to-date with our upcoming classes and enroll today.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
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
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
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
                      animate={{ y: [0, -15, 0] }}
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </StyledRoot>
  );
}
