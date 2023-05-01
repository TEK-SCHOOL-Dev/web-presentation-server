// routes
import { PATH_AUTH, PATH_PAGE } from '../../../routes/paths';
// config
import { PATH_AFTER_LOGIN } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  {
    title: 'Programs',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: 'Courses & Programs',
        items: [
          { title: 'Upcoming Classes', path: PATH_PAGE.upcommingClasses },
          { title: 'Course Catalog', path: PATH_PAGE.about },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'Admissions',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: 'Admission & Aid',
        items: [
          { title: 'Enrollment Requirements', path: PATH_PAGE.enrollmentRequirements },
          { title: 'Enrollment Process', path: PATH_PAGE.enrollmentProcess },
          { title: 'Financial Aid Programs', path: PATH_PAGE.financialAidPrograms },
          { title: 'TEK Aid Partners', path: PATH_PAGE.tekAidPartners },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'Resources',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: 'Resources',
        items: [
          { title: 'Certification Verification', path: PATH_PAGE.certificateVerification },
          { title: 'Learning Resources', path: PATH_PAGE.learningResources },
          { title: 'Community Forums', path: PATH_PAGE.communityForums },
          { title: 'Career Resources', path: PATH_PAGE.careerResources },
          { title: 'Webinars & Workshops', path: PATH_PAGE.webinarsAndWorkShops },
          { title: 'Blogs', path: PATH_PAGE.blogs },
          { title: 'Podcast', path: PATH_PAGE.podcasts },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'About Us',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: 'About Us',
        items: [
          { title: 'Our Team', path: PATH_PAGE.ourTeam },
          { title: 'Our Story', path: PATH_PAGE.ourStory },
          { title: 'Media Coverage', path: PATH_PAGE.mediaCoverage },
        ],
      },

      {
        subheader: 'Students Life',
        items: [
          { title: 'Student Stories', path: PATH_PAGE.studentStories },
          { title: 'Student Activities & Events', path: PATH_PAGE.studentActivities },
        ],
      },

      {
        subheader: 'Business Partnership',
        items: [
          { title: 'Doing business with us', path: PATH_PAGE.doingBusiness },
          { title: 'Social Impact', path: PATH_PAGE.socialImpact },
        ],
      },

      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'Contact Us',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: 'Contact Us',
        items: [
          { title: 'FAQ', path: PATH_PAGE.faqNew },
          { title: 'Schedule a Tour', path: PATH_PAGE.scheduleTour },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
];

export default navConfig;
