import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Paper,
  Typography,
  ButtonBase,
} from '@mui/material';
import Textfields from '../_examples/mui/Textfields';

const TABS = [
  {
    value: 'tab1',
    label: 'Personal info',
    component: <Textfields variant="standard" />,
    icon: '/assets/icons/applynow/Personal Information.svg',
  },
  {
    value: 'tab2',
    label: 'Academic Background',
    component: <Textfields variant="outlined" />,
    icon: '/assets/icons/applynow/Academic and Professional Background.svg',
  },
  {
    value: 'tab3',
    label: 'Expectations & conclusion',
    component: <Textfields variant="filled" />,
    icon: '/assets/icons/applynow/Expectations and Commitment.svg',
  },
  {
    value: 'tab4',
    label: 'Resources',
    component: <Textfields variant="standard" />,
    icon: '/assets/icons/applynow/Resources.svg',
  },
  {
    value: 'tab5',
    label: 'Program Select.',
    component: <Textfields variant="standard" />,
    icon: '/assets/icons/applynow/Program Select.svg',
  },
  {
    value: 'tab6',
    label: 'Financial Info',
    component: <Textfields variant="standard" />,
    icon: '/assets/icons/applynow/Financial Information.svg',
  },
  {
    value: 'tab7',
    label: 'Additional Info',
    component: <Textfields variant="standard" />,
    icon: '/assets/icons/applynow/Additional Information.svg',
  },
  {
    value: 'tab8',
    label: 'Submission',
    component: <Textfields variant="standard" />,
    icon: '/assets/icons/applynow/Submission.svg',
  },
];

export default function MUITextFieldPage() {
  const [currentTab, setCurrentTab] = useState('tab1');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Helmet>
        <title> Apply Now | TekSchool </title>
      </Helmet>

      <Container sx={{ my: 10 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'nowrap',
            mb: 5,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {TABS.map((tab) => (
            <Box
              key={tab.value}
              onClick={() => setCurrentTab(tab.value)}
              sx={{
                flex: '1 1 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: tab.value === currentTab ? 1 : 0.5,
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.02)',
                },
                transition: 'all 0.2s ease-in-out',
                margin: theme.spacing(1),
                height: '100%',
              }}
            >
              <ButtonBase
                component="div"
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    px: 3,
                    py: isMobile ? 2 : 5,
                    borderRadius: 2,
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: 250,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={tab.icon}
                    alt={tab.label}
                    style={{
                      width: isMobile ? 48 : 60,
                      height: isMobile ? 48 : 60,
                      marginBottom: '1rem',
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 2,
                      lineHeight: '1.2rem',
                      fontSize: '0.9rem',
                      minHeight: '2.4rem',
                    }}
                  >
                    {tab.label}
                  </Typography>
                </Paper>
              </ButtonBase>
            </Box>
          ))}
        </Box>

        <form noValidate autoComplete="off">
          {TABS.map(
            (tab) =>
              tab.value === currentTab && (
                <Box key={tab.value} sx={{ mt: 5 }}>
                  {tab.component}
                </Box>
              )
          )}
        </form>
      </Container>
    </>
  );
}
