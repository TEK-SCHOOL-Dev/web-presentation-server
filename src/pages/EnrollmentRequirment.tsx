import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  UpcomingHeroe,
  EnrollmentVision,
  EnrollmentThirdSection,
} from '../sections/enrollmentRequirment';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <UpcomingHeroe />
      <EnrollmentVision />
      <EnrollmentThirdSection />
    </>
  );
}
