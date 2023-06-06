// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// _mock_
import { _faqs } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------
type FaqsListProps = {
  selectedCategory: string;
};

export default function FaqsList({ selectedCategory }: FaqsListProps) {
  return (
    <div>
      {_faqs
        .filter((faq) => faq.category === selectedCategory)
        .map((accordion) => (
          <Accordion key={accordion.id}>
            <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
              <Typography variant="subtitle1">{accordion.heading}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{accordion.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
