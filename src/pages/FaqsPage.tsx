import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
// sections
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/faqs';

// ----------------------------------------------------------------------

export default function FaqsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleSelectCategory = (categoryLabel: string) => {
    setSelectedCategory(categoryLabel);
  };
  return (
    <>
      <Helmet>
        <title> Faqs | TEk School </title>
      </Helmet>

      {/* <FaqsHero /> */}

      <Container sx={{ pt: 15, pb: 10, position: 'relative' }}>
        <FaqsCategory selectCategory={handleSelectCategory} />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {selectedCategory && <FaqsList selectedCategory={selectedCategory} />}

          <FaqsForm />
        </Box>
      </Container>
    </>
  );
}
