import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgGradient } from '../../utils/cssStyles';
// components
import Image from '../../components/image';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0),
}));

const StyledBg = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  position: 'absolute',
  transform: 'scaleX(-1)',
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
}));

// ----------------------------------------------------------------------

export default function ComponentHero() {
  const isDesktop = useResponsive('up', 'sm');

  return (
    <StyledRoot>
      <Container
        component={MotionContainer}
        sx={{
          display: { md: 'flex' },
          justifyContent: { md: 'space-between' },
        }}
      >
        {isDesktop && (
          <m.div variants={varFade().inDown}>
            <Image
              disabledEffect
              alt="hero"
              src="/assets/illustrations/characters/character_7.png"
              sx={{ maxWidth: 320 }}
            />
          </m.div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stack spacing={3}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h3" component="h1">
                Student Community
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'text.secondary' }}>
                <ul style={{ fontSize: '1.1rem', lineHeight: '2.5rem' }}>
                  <li>Join our student community and connect with like-minded individuals.</li>
                  <li>Share your experiences and learn from others in the tech industry.</li>
                  <li>
                    Our student community is a valuable resource for networking, job opportunities,
                    and career growth.
                  </li>
                </ul>
              </Typography>
            </m.div>
          </Stack>
        </div>
      </Container>

      <StyledBg />
    </StyledRoot>
  );
}
