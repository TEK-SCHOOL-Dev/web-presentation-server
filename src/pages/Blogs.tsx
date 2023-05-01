import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import { BlogFirstSection, BlogSecondSection, BlogThirdSection } from '../sections/blgs';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Blogs | TEKSchool</title>
      </Helmet>

      <BlogFirstSection />

      <BlogSecondSection />

      <BlogThirdSection />
    </>
  );
}
