import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { CFirstSection, CSecondSection, CThirdSection } from '../sections/Cresourcess';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <CFirstSection />
      <CSecondSection />
      <CThirdSection />
    </>
  );
}
