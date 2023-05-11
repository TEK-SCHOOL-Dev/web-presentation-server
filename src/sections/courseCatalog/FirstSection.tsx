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
          <span>Immerse</span> yourself in our all-encompassing SDET training program, designed to
          provide you with the essential skills and knowledge to thrive in the software testing
          domain, regardless of your IT background. SDET, or Software Development Engineer in Test,
          is a role that combines software development and testing expertise, ensuring high-quality
          software products. Our program is tailored to cover the critical aspects of SDET,
          empowering you to excel in this dynamic and in-demand field, even if you have yet to gain
          experience in IT.
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
