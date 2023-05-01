import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { MediaFirstSection } from '../sections/mediaCoverage';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Learning Resources | TEKSchool</title>
      </Helmet>

      <MediaFirstSection />
    </>
  );
}
