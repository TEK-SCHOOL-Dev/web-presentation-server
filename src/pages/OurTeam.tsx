import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  OurTeamFirstSection,
  OurTeamSecondSection,
  OurTeamThirdSection,
} from '../sections/ourTeam';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Learning Resources | TEKSchool</title>
      </Helmet>

      <OurTeamFirstSection />

      <OurTeamSecondSection />

      <OurTeamThirdSection />
    </>
  );
}
