import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { UpcomingHeroe, UpcomingVision, UpcomingThirdSection } from '../sections/upcomingClasses';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <UpcomingHeroe />

      <UpcomingVision />

      <UpcomingThirdSection />
    </>
  );
}
