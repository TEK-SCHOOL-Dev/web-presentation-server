import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  EnrProcessFirstSection,
  EnrProcessSecondSection,
  EnrProcessThirdSection,
} from '../sections/enrollmentProcess';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <EnrProcessFirstSection />

      <EnrProcessSecondSection />

      <EnrProcessThirdSection />
    </>
  );
}
