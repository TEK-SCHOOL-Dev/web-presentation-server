import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  TekAidFirstSection,
  TekAidSecondSection,
  TekAidThirdSection,
} from '../sections/tekAidPartners';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <TekAidFirstSection />

      <TekAidSecondSection />

      <TekAidThirdSection />
    </>
  );
}
