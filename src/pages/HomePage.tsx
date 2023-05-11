import { Helmet } from 'react-helmet-async';
import { m, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  HomeHero,
  Impact,
  HomeComponent,
  Resources,
  AboutVision,
  HomeMinimal,
  ProgramACourses,
  HomeDarkMode,
  HomeLookingFor,
  HomeForDesigner,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
  TeachingApprach,
} from '../sections/home';

// ----------------------------------------------------------------------

export default function HomePage() {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Helmet>
        <title> The starting of your new journey | TekSchool </title>
      </Helmet>

      {progress}

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        {/* Programs & Courses home chapters */}

        <Link to="ProgramACourses" spy smooth duration={500} offset={-50}>
          <ProgramACourses />
        </Link>

        <Link to="HomeMinimal" spy smooth duration={500} offset={-50}>
          <HomeMinimal />
        </Link>

        <Link to="Impact" spy smooth  duration={500} offset={-50}>
          <Impact />
        </Link>

        <Link to="StudentComunity" spy smooth duration={500} offset={-50}>
          <HomeComponent id="StudentComunity" />
        </Link>

        <Link to="Resource" spy smooth duration={500} offset={-50}>
          <Resources id="Resource" />
        </Link>

        <Link to="teachingApproach" spy smooth duration={500} offset={-50}>
          <TeachingApprach id="teachingApproach" />
          
        </Link>

        <Link to="AboutVision" spy smooth duration={500} offset={-50}>
          <AboutVision />
        </Link>

        <Link to="HomeAdvertisement" spy smooth duration={500} offset={-50}>
          <HomeAdvertisement />
        </Link>
      </Box>
      {/* Add a button to scroll back to the top */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 2000,
          cursor: 'pointer',
        }}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.palette.primary.main}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </Box>
    </>
  );
}
