import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid, Stack } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// routes
import { PATH_ZONE_ON_STORE } from '../../routes/paths';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
        >
          <Grid item xs={12} md={7}>
            <Content />
          </Grid>

          <Grid item xs={12} md={4}>
            <Description />
          </Grid>

          {!isDesktop && (
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              {VisitButton}
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}

function Description() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <m.div variants={varFade().inLeft}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: 'text.secondary',
            mb: 3,
            '& span': {
              fontSize: '1.6rem',
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          <span>Here</span> are some of the TEK students stories:
          <ul>
            <li>
              John had graduated from high school but was unsure about his career path. He joined
              TEK School and discovered his passion for programming. Today, John works as a software
              engineer at a top tech company. [Add quotes].
            </li>
            <li>
              Maria managed her household before she decided to start her career in technology.
              After completing her studies at TEK School&apos;s online program, Maria now works as a
              web developer and has created her own startup. [Add quotes].
            </li>
            <li>
              After receiving scholarship support from Tek School, Ahmad managed to get an education
              at Tek School. He now works as a freelance developer and is able to support his
              family. [Add quotes].
            </li>
          </ul>
        </Typography>
      </m.div>

      {isDesktop && <m.div variants={varFade().inLeft}> {VisitButton} </m.div>}
      {!isDesktop && (
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
          {VisitButton}
        </Grid>
      )}
    </Stack>
  );
}

function Content() {
  return (
    <Box component={m.div} variants={varFade().inRight}>
      <Image disabledEffect alt="rocket" src="/assets/images/home/zone_landing.png" />
    </Box>
  );
}

const VisitButton = (
  <Button
    color="inherit"
    size="large"
    variant="outlined"
    target="_blank"
    rel="noopener"
    href={PATH_ZONE_ON_STORE}
    endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
  >
    Curriculum highlights
  </Button>
);
