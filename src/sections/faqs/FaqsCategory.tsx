import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Box,
  Paper,
  AppBar,
  Drawer,
  Button,
  Toolbar,
  Divider,
  ListItemButton,
  ButtonBase,
} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import TextMaxLine from '../../components/text-max-line';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    label: 'Academics',
    icon: '/assets/icons/faqs/ic_academics.svg',
    href: '#',
  },
  {
    label: 'Admissions',
    icon: '/assets/icons/faqs/ic_admissions.svg',
    href: '#',
  },
  {
    label: 'Finances',
    icon: '/assets/icons/faqs/ic_finances.svg',
    href: '#',
  },
  {
    label: 'Teaching & Learning',
    icon: '/assets/icons/faqs/ic_teaching_learning.svg',
    href: '#',
  },
  {
    label: 'Student Life',
    icon: '/assets/icons/faqs/ic_student_life.svg',
    href: '#',
  },
  {
    label: 'Career Services',
    icon: '/assets/icons/faqs/ic_career.svg',
    href: '#',
  },
];

type FaqsCategoryProps = {
  selectCategory: (category: string) => void;
};

type CardProps = {
  category: {
    label: string;
    icon: string;
  };
  selectCategory: (category: string) => void;
  selectedCategory: string | null;
};

// ----------------------------------------------------------------------

export default function FaqsCategory({ selectCategory }: FaqsCategoryProps) {
  const isDesktop = useResponsive('up', 'md');

  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (categoryLabel: string) => {
    selectCategory(categoryLabel);
    setSelectedCategory(categoryLabel);
  };

  if (!isDesktop) {
    return (
      <>
        <AppBar position="absolute" color="transparent" sx={{ boxShadow: 0 }}>
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <Button
              variant="soft"
              startIcon={<Iconify icon="eva:menu-2-fill" />}
              onClick={handleOpen}
            >
              Categories
            </Button>
          </Toolbar>
          <Divider />
        </AppBar>

        <Drawer open={open} onClose={handleClose}>
          <Box gap={1} display="grid" gridTemplateColumns="repeat(2, 1fr)" sx={{ p: 1 }}>
            {CATEGORIES.map((category) => (
              <CardMobile
                key={category.label}
                category={category}
                selectCategory={selectCategory}
                selectedCategory={selectedCategory}
              />
            ))}
          </Box>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      component={MotionViewport}
      gap={1.5}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(6, 1fr)',
      }}
      sx={{ mb: 15, width: '100%' }}
    >
      {CATEGORIES.map((category) => (
        <m.div key={category.label} variants={varFade().inDown}>
          <CardDesktop
            category={category}
            selectCategory={selectCategory}
            selectedCategory={selectedCategory}
          />
        </m.div>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

function CardDesktop({ category, selectCategory, selectedCategory }: CardProps) {
  const { label, icon } = category;

  const handleClick = () => {
    selectCategory(label);
  };

  const cardVariant = {
    initial: {
      scale: 0.7,
      y: 50,
      opacity: 0,
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      scale: 1.1,
      y: -10,
      boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <m.div
      initial="initial"
      animate={selectedCategory === label ? 'hover' : 'animate'}
      whileHover="hover"
      exit="exit"
      variants={cardVariant}
    >
      <ButtonBase
        onClick={handleClick}
        component="div"
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          opacity: 0.5,
          '&:hover': {
            opacity: 1,
          },
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            px: 3,
            py: 5,
            borderRadius: 2,
            textAlign: 'center',
            borderColor: (theme) => alpha(theme.palette.grey[500], 0.12),
            boxShadow: (theme) => theme.customShadows.z24,
            width: '100%',
            flexGrow: 1,
          }}
        >
          <Image
            disabledEffect
            alt={icon}
            src={icon}
            sx={{ mb: 2, width: 80, height: 80, mx: 'auto' }}
          />

          <TextMaxLine variant="subtitle2" persistent>
            {label}
          </TextMaxLine>
        </Paper>
      </ButtonBase>
    </m.div>
  );
}

// ----------------------------------------------------------------------

function CardMobile({ category, selectCategory, selectedCategory }: CardProps) {
  const { label, icon } = category;

  const handleClick = () => {
    selectCategory(label);
  };

  return (
    <ListItemButton
      onClick={handleClick}
      key={label}
      sx={{
        py: 2,
        maxWidth: 140,
        borderRadius: 1,
        textAlign: 'center',
        typography: 'body2',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: selectedCategory === label ? 'primary.main' : 'background.neutral',
      }}
    >
      <Image alt={icon} src={icon} sx={{ width: 48, height: 48, mb: 1 }} />
      {category.label}
    </ListItemButton>
  );
}
