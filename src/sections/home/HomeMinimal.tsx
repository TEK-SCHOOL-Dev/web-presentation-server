import { Link as ScrollLink } from 'react-scroll';
import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, ButtonBase, useTheme } from '@mui/material';

// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: (isLight: boolean) => `/assets/icons/home/community_${isLight ? 'light' : 'dark'}.svg`,
    title: 'Community',
    description:
      'Our programs and courses are designed to give you hands-on experience and prepare you for a successful career in the tech industry.',
    link: 'StudentComunity',
  },

  {
    icon: (isLight: boolean) => `/assets/icons/home/resources_${isLight ? 'light' : 'dark'}.svg`,
    title: 'Resources',
    description: 'Check out our course catalog to find the program or course thats right for you.',
    link: 'Resource',
  },
  {
    icon: (isLight: boolean) =>
      `/assets/icons/home/teaching-approach_${isLight ? 'light' : 'dark'}.svg`,
    title: 'Teaching Approach',
    description:
      'Explore our range of programs and courses, from coding bootcamps to professional development courses.',
    link: 'teachingApproach',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(10, 5),
  transition:
    'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), boxShadow 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 8px 16px ${
      theme.palette.mode === 'light'
        ? alpha(theme.palette.grey[500], 0.24)
        : alpha(theme.palette.common.black, 0.24)
    }`,
  },
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <ScrollLink
                to={card.link || ''}
                smooth
                duration={500}
                onClick={() => console.log(`Clicked ${card.title}`)}
              >
                <StyledCard
                  sx={{
                    ...(index === 1 && {
                      boxShadow: () => ({
                        md: `-40px 40px 80px ${
                          theme.palette.mode === 'light'
                            ? alpha(theme.palette.grey[500], 0.16)
                            : alpha(theme.palette.common.black, 0.4)
                        }
                        }`,
                      }),
                    }),
                  }}
                >
                  <Image
                    src={card.icon(isLight)}
                    alt={card.title}
                    sx={{ mx: 'auto', width: 80, height: 80 }}
                  />

                  <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                    {card.title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
                </StyledCard>
              </ScrollLink>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
