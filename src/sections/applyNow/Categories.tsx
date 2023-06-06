import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Tab, Tabs, Paper, Typography } from '@mui/material';

import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import Textfields from '../_examples/mui/Textfields';

const TABS = [
  {
    value: 'outlined',
    label: 'Personal information',
    component: <Textfields variant="outlined" />,
    icon: '/assets/icons/applynow/Personal Information.svg',
  },
  {
    value: 'filled',
    label: 'Resources',
    component: <Textfields variant="filled" />,
    icon: '/assets/icons/applynow/Resources.svg',
  },
  {
    value: 'standard',
    label: 'Financial Information',
    component: <Textfields variant="standard" />,
    icon: '/assets/icons/applynow/Financial Information.svg',
  },
];

export default function MUITextFieldPage() {
  const [currentTab, setCurrentTab] = useState('outlined');

  return (
    <>
      <Helmet>
        <title> MUI Components: Textfield | Minimal UI</title>
      </Helmet>

      <Container sx={{ my: 10 }}>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              label={
                <Paper
                  variant="outlined"
                  sx={{
                    px: 5,
                    py: 4,
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={tab.icon}
                    alt={tab.label}
                    style={{ width: 100, height: 100, marginBottom: '1rem' }}
                  />
                  <Typography variant="body2">{tab.label}</Typography>
                </Paper>
              }
            />
          ))}
        </Tabs>

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
