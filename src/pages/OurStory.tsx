import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { OurStoryFirstSection, OurStorySecondSection } from '../sections/ourStory';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Our Story | TEKSchool </title>
      </Helmet>

      <OurStoryFirstSection />

      <OurStorySecondSection />
    </>
  );
}
