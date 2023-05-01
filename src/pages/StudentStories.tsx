import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  StdStoFirstSection,
  StdStoSecondSection,
  StdStoThirdSection,
} from '../sections/studentStories';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Student Stories | TEKSchool</title>
      </Helmet>

      <StdStoFirstSection />

      <StdStoSecondSection />

      <StdStoThirdSection />
    </>
  );
}
