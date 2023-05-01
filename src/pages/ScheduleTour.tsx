import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { ScheduleTourFirstSection, ScheduleTourSecondSection } from '../sections/scheduleTour';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Schedule a Tour | TEK School </title>
      </Helmet>

      <ScheduleTourFirstSection />
      <ScheduleTourSecondSection />
    </>
  );
}
