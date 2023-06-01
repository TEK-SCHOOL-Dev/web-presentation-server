import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  CommunityFirstSection,
  CommunitySecondSection,
  CommunityThirdSection,
} from '../sections/communityForums';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Upcomming Classes | TEKSchool</title>
      </Helmet>

      <CommunityFirstSection />

      <CommunitySecondSection />

      <CommunityThirdSection />
    </>
  );
}
