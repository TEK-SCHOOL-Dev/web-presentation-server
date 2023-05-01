import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { PodsFirstSection, PodsSecondSection, PodsThirdSection } from '../sections/podcasts';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <PodsFirstSection />

      <PodsSecondSection />

      <PodsThirdSection />
    </>
  );
}
