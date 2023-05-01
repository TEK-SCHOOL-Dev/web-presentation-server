import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { WebFirstSection, WebSecondSection, WebThirdSection } from '../sections/webinars';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <WebFirstSection />

      <WebSecondSection />

      <WebThirdSection />
    </>
  );
}
