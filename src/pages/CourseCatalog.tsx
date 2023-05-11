import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  FirstSection,
  SecondSection,
  FourthSection,
  AdmissionRequirment,
  IdealCandidates,
  ProgramLegacy,
} from '../sections/courseCatalog';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Course Catalog | TEKSchool</title>
      </Helmet>

      <FirstSection />

      <SecondSection />

      <FourthSection />

      <AdmissionRequirment />

      <IdealCandidates />
      <ProgramLegacy />
    </>
  );
}
