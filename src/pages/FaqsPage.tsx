import { Helmet } from 'react-helmet-async';
import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { FaqsCategory, FaqsList, FaqsForm } from '../sections/faqs';

const styles = {
  box: {
    maxWidth: '80%',
    margin: 'auto',
  },
};

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

      <Container sx={{ height: '100vh', pt: 5, pb: 10, position: 'relative' }}>
        <Typography variant="h3" sx={{ mb: 5, textAlign: 'center', color: 'primary.main' }}>
          Frequently asked questions
        </Typography>

        <Box sx={styles.box}>
          <FaqsCategory selectCategory={handleSelectCategory} />
        </Box>

        {selectedCategory && (
          <Box sx={styles.box}>
            <FaqsList selectedCategory={selectedCategory} />
          </Box>
        )}
      </Container>

      <Container sx={{ pt: 15, pb: 10, position: 'relative' }}>
        <Box sx={styles.box}>
          <FaqsForm />
        </Box>
      </Container>
    </>
  );
}
