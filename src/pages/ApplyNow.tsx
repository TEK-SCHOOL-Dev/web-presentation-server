import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Divider, Container } from '@mui/material';
// sections
import { ApplyForm } from '../sections/applyNow';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Box>
        <Helmet>
          <title> Contact Us | TEKSchool</title>
        </Helmet>

        <Container sx={{ pt: 15, pb: 10, position: 'relative' }}>
          <Box
            gap={10}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <ApplyForm />
          </Box>
        </Container>
      </Box>
    </>
  );
}
