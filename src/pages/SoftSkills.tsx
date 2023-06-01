import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  StudentActFirstSection,
  StudentActSecondSection,
  StudentActThirdSection,
  StudentActFourthSection,
  StudentActFifthSection,
} from '../sections/studentActivities';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <StudentActFirstSection />

      <StudentActSecondSection />

      <StudentActThirdSection />

      <StudentActFourthSection />

      <StudentActFifthSection />
    </>
  );
}
