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
          <span> At TEK School </span>, we are proud of the recognition and media coverage we have
          received for our innovative approach to education. Our programs have been featured in
          various news outlets, including VOA Dari and VOA Pashto. We are thrilled to see the impact
          our school is making in the communities we serve, and we are committed to continuing to
          provide high-quality education to all. To learn more about our media coverage, please
          follow the link below.
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
