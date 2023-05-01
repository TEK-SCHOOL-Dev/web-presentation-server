import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import {
  FinancialFirstSection,
  FinancialSecondSection,
  FinancialThirdSection,
} from '../sections/financialAidPrograms';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Financial Aids | TEKSchool</title>
      </Helmet>

      <FinancialFirstSection />

      <FinancialSecondSection />

      <FinancialThirdSection />
    </>
  );
}
