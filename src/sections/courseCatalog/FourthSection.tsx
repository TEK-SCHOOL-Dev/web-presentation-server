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
            <Content />
          </Grid>

          <Grid item xs={12} md={7}>
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
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
            color: 'primary.main',
          }}
        >
          Tuition & Fees
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 3 }}>
          Find out about the program&apos;s tuition and fees, payment options, and potential
          financial aid opportunities to help support your educational investment.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 3 }}>
          Find out about the program&apos;s tuition and fees, payment options, and potential
          financial aid opportunities to help support your educational investment. Our SDET program
          offers a flexible payment structure, allowing you to focus on learning and achieving your
          career goals. The tuition fee for the 7-month program is $600 per month. Once you secure a
          job after completing the course, there will be four additional payments of $1,000 each.
          Alongside the tuition, there is a platform fee of $50 per month for maintaining access to
          the learning platform, which is required for at least the duration of the class. You can
          choose to continue the subscription as long as you find value in the platform&apos;s
          resources and features.
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
