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
          <Grid item xs={12} md={4}>
            <Description />
          </Grid>

          <Grid item xs={12} md={7}>
            <Content />
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

// ----------------------------------------------------------------------

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
      <m.div variants={varFade().inDown}>
        {/* <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
            color: 'primary.main',
          }}
        >
          Upcoming Classes!
        </Typography> */}
        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 3 }}>
          We continue to build partnerships that provide our students with financial aid that meets
          their unique situation. We encourage applicants to explore external funding options. We
          also help applicants locate potential sources of aid. Contact Admissions to learn more.
        </Typography>
      </m.div>

      {isDesktop && <m.div variants={varFade().inDown}> {VisitButton} </m.div>}
      {!isDesktop && (
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
          {VisitButton}
        </Grid>
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <Box component={m.div} variants={varFade().inUp}>
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
    Apply Now
  </Button>
);
