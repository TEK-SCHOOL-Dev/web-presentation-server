import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  LearningFirstSection,
  LearningSecondSection,
  LearningThirdSection,
} from '../sections/learningResources';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Learning Resources | TEKSchool</title>
      </Helmet>

      <LearningFirstSection />

      <LearningSecondSection />

      <LearningThirdSection />
    </>
  );
}
