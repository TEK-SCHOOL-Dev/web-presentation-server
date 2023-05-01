import { m, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid, Rating } from '@mui/material';
// routes
import { PATH_DASHBOARD, PATH_FIGMA_PREVIEW } from '../../routes/paths';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { textGradient, bgGradient } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// components
import SvgColor from '../../components/svg-color';
import Iconify from '../../components/iconify';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    position: 'fixed',
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(15, 0),
  height: '100%',
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  backgroundSize: '400%',
  fontFamily: "'Barlow', sans-serif",
  fontSize: `${64 / 16}rem`,
  textAlign: 'center',
  lineHeight: 1,
  padding: 0,
  marginTop: 8,
  marginBottom: 24,
  letterSpacing: 8,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 480,
  height: 480,
  top: '-80px', // <-- add this line
  right: '-80px', // <-- add this line
  borderRadius: '50%',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.08),
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const isDesktop = useResponsive('up', 'md');

  const { scrollYProgress } = useScroll();

  const [hide, setHide] = useState(false);

  useEffect(
    () =>
      scrollYProgress.on('change', (scrollHeight) => {
        if (scrollHeight > 0.8) {
          setHide(true);
        } else {
          setHide(false);
        }
      }),
    [scrollYProgress]
  );

  return (
    <>
      <StyledRoot sx={{ ...(hide && { opacity: 0 }) }}>
        <Container component={MotionContainer} sx={{ height: 1 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={10} sx={{ height: 1 }}>
            {isDesktop && (
              <Stack sx={{ height: 1 }}>
                <Content />
              </Stack>
            )}

            <Box sx={{ width: '50%' }}>
              <StyledDescription>
                <m.div variants={varFade().in}>
                  <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    Start Your <br />
                    new journy with
                  </Typography>
                </m.div>

                <m.div variants={varFade().in}>
                  <StyledGradientText
                    animate={{ backgroundPosition: '200% center' }}
                    transition={{
                      repeatType: 'reverse',
                      ease: 'linear',
                      duration: 20,
                      repeat: Infinity,
                    }}
                  >
                    TEKSchool
                  </StyledGradientText>
                </m.div>

                <m.div variants={varFade().in}>
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Start your career journey here with our industry-leading tech education
                    programs. Our courses are designed to give you the skills you need to succeed in
                    todays fast-paced tech industry.
                  </Typography>
                </m.div>

                <m.div variants={varFade().in}>
                  <Stack
                    spacing={0.75}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ my: 3 }}
                  >
                    <Rating readOnly value={4.95} precision={0.1} max={5} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      <Box component="strong" sx={{ mr: 0.5, color: 'text.primary' }}>
                        4.95/5
                      </Box>
                      (99+ reviews)
                    </Typography>
                  </Stack>
                </m.div>

                <m.div variants={varFade().in}>
                  <Stack
                    spacing={1.5}
                    direction={{ xs: 'column-reverse', sm: 'row' }}
                    sx={{ mb: 5 }}
                  >
                    <Stack alignItems="center" spacing={2}>
                      <Button
                        component={RouterLink}
                        to={PATH_DASHBOARD.root}
                        color="inherit"
                        size="large"
                        variant="contained"
                        startIcon={<Iconify icon="eva:flash-fill" width={24} />}
                        sx={{
                          bgcolor: 'text.primary',
                          color: (theme) =>
                            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                          '&:hover': {
                            bgcolor: 'text.primary',
                          },
                        }}
                      >
                        Live Preview
                      </Button>
                    </Stack>
                    <Button
                      color="inherit"
                      size="large"
                      variant="outlined"
                      startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
                      target="_blank"
                      rel="noopener"
                      href={PATH_FIGMA_PREVIEW}
                      sx={{ borderColor: 'text.primary' }}
                    >
                      Design Preview
                    </Button>
                  </Stack>
                </m.div>
              </StyledDescription>
            </Box>
          </Stack>
        </Container>

        {isDesktop && <StyledEllipseTop />}

        <StyledEllipseBottom />
      </StyledRoot>

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}

function Content() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: 'calc(100% - 80px)',
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Stack
          component={m.div}
          sx={{
            width: 350,
            position: 'relative',
            left: '30%',
            mb: 30,
          }}
        >
          <Box
            component={m.img}
            alt={`hero_${isLight ? 'light' : 'dark'}_2`}
            src={`/assets/images/home/rocket_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '50%',
              transform: 'translate(50%, -50%)',
              zIndex: 1,
            }}
          />
          <Stack
            component={m.div}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '50%',
              transform: 'translate(50%, -50%)',
              zIndex: 2,
            }}
          >
            <Box
              component={m.img}
              alt={`cloud_${isLight ? 'light' : 'dark'}`}
              src={`/assets/images/home/cloud_${isLight ? 'light' : 'dark'}.png`}
              sx={{
                width: '100%',
                ml: 20,
                mt: 15,
              }}
            />
          </Stack>
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/backCloud_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '80%',
              bottom: 70,
              right: '90%',
              transform: 'translateX(50%)',
            }}
          />
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/light-cloud-top-right_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '50%',
              bottom: 70,
              left: '350px',
              transform: 'translateX(50%)',
            }}
          />
        </Stack>

        <Stack
          component={m.div}
          sx={{
            width: 350,
            position: 'relative',
            right: '35%',
            mb: 30,
          }}
        >
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/cloudtopleft_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '80%',
              bottom: 70,
              left: '67px',
              transform: 'translateX(-50%)',
            }}
          />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Stack
          component={m.div}
          sx={{
            width: 1150,
            position: 'relative',
            mb: 2,
          }}
        >
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/books_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '80%',
              bottom: -20,
              left: '1034px',
              transform: 'translateX(-40%)',
            }}
          />
        </Stack>

        <Stack
          component={m.div}
          sx={{
            width: 280,
            position: 'absolute',
            mb: 2,
          }}
        >
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/characterback_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              left: '57px',
              transform: 'translate(-320%, +25%)',
            }}
          />
        </Stack>

        <Stack
          component={m.div}
          sx={{
            width: 250,
            position: 'absolute',
            mb: 2,
          }}
        >
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/cloudmidmountain_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              left: '57px',
              transform: 'translate(-320%, +35%)',
            }}
          />
        </Stack>

        <Stack
          component={m.div}
          sx={{
            width: 250,
            position: 'absolute',
            mb: 2,
          }}
        >
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/cloudfrontmountain_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              left: '57px',
              transform: 'translate(-190%, +10%)',
              zIndex: 1,
            }}
          />
        </Stack>

        <Stack
          component={m.div}
          sx={{
            width: 350,
            position: 'absolute',
            mb: 2,
          }}
        >
          <Box
            component={m.img}
            alt={`cloud_${isLight ? 'light' : 'dark'}`}
            src={`/assets/images/home/characterfront_${isLight ? 'light' : 'dark'}.png`}
            sx={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              left: '57px',
              transform: 'translate(-180%, +30%)',
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
}
