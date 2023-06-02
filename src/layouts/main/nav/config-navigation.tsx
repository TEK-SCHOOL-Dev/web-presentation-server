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
        subheader: 'Accelerated Training Programs',
        items: [
          { title: 'Upcoming Classes', path: PATH_PAGE.upcommingClasses },
          { title: 'Course Catalog', path: PATH_PAGE.courseCatalog },
        ],
      },

      {
        subheader: 'Workshops',
        items: [
          { title: 'Soft Skills', path: PATH_PAGE.comingSoon },
          { title: 'Compliance Testing', path: PATH_PAGE.comingSoon },
          { title: 'Automation', path: PATH_PAGE.comingSoon },
          { title: 'Security Testing', path: PATH_PAGE.comingSoon },
        ],
      },
      {
        subheader: 'Certificate Prep Programs',
        items: [
          { title: 'CompTIA', path: PATH_PAGE.comingSoon },
          { title: 'ISTQB', path: PATH_PAGE.comingSoon },
          { title: 'Oracle', path: PATH_PAGE.comingSoon },
          { title: 'Scrum Alliance', path: PATH_PAGE.comingSoon },
          { title: 'ICA', path: PATH_PAGE.comingSoon },
          { title: 'ISQI', path: PATH_PAGE.comingSoon },
          { title: 'Selenium', path: PATH_PAGE.comingSoon },
          { title: 'ASQ', path: PATH_PAGE.comingSoon },
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
        subheader: 'Admission',
        items: [
          { title: 'Enrollment Process', path: PATH_PAGE.enrollmentProcess },
          { title: 'Requirements', path: PATH_PAGE.enrollmentRequirements },
          { title: 'International Students', path: PATH_PAGE.comingSoon },
          { title: 'Apply', path: PATH_PAGE.applyNow },
          // { title: 'Financial Aid Programs', path: PATH_PAGE.financialAidPrograms }, Delete this
          // { title: 'TEK Aid Partners', path: PATH_PAGE.tekAidPartners }, Delete this
        ],
      },
      {
        subheader: 'TEK AID',
        items: [
          { title: 'Financial Aid Requirements', path: PATH_PAGE.comingSoon },
          { title: 'TEK Financial Aid Programs', path: PATH_PAGE.comingSoon },
          { title: 'Apply', path: PATH_PAGE.applyNow },
        ],
      },
      {
        subheader: 'Our AID Partners Programs',
        items: [
          { title: 'Women for Afghan Women (WAW)', path: PATH_PAGE.comingSoon },
          {
            title: 'Afghan American Organization (AAO)',
            path: PATH_PAGE.comingSoon,
          },
          { title: 'Afghan American Foundation (AAF)', path: PATH_PAGE.comingSoon },
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
          { title: 'Professional Networking Events', path: PATH_PAGE.comingSoon },
          { title: 'Job Market Support Services', path: PATH_PAGE.comingSoon },
          { title: 'Learning Resources', path: PATH_PAGE.learningResources },
          { title: 'Community Forums', path: PATH_PAGE.communityForums },
          { title: 'Career Resources', path: PATH_PAGE.careerResources },
        ],
      },
      {
        subheader: 'Learners Platform ',
        items: [
          { title: 'Membership Benefits', path: PATH_PAGE.comingSoon },
          { title: 'Platform Features', path: PATH_PAGE.comingSoon },
          { title: 'Webinars & Workshops', path: PATH_PAGE.webinarsAndWorkShops },
          { title: 'Discussion Forums', path: PATH_PAGE.comingSoon },
        ],
      },
      {
        subheader: 'Public Resources',
        items: [
          { title: 'Podcasts', path: PATH_PAGE.podcasts },
          { title: 'Blog Articles', path: PATH_PAGE.blogs },
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
          { title: 'Mission & Vision & Values', path: PATH_PAGE.comingSoon },
          { title: 'Accreditation', path: PATH_PAGE.comingSoon },
          { title: 'Facilities', path: PATH_PAGE.comingSoon },
        ],
      },
      {
        subheader: 'Students Experience',
        items: [
          { title: 'Student Stories', path: PATH_PAGE.studentStories },
          { title: 'Student Activities & Events', path: PATH_PAGE.studentActivities },
          { title: 'Mentorship Support', path: PATH_PAGE.comingSoon },
        ],
      },

      {
        subheader: 'Partnerships & Impact',
        items: [
          { title: 'Business Partnerships', path: PATH_PAGE.doingBusiness },
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
        subheader: 'Get in Touch',
        items: [
          { title: 'Contact Information', path: PATH_PAGE.contactInformation },
          { title: 'General Inquiries', path: PATH_PAGE.scheduleTour },
          { title: 'Support & Helpdesk', path: PATH_PAGE.scheduleTour },
          { title: 'Social Media Channels icons', path: PATH_PAGE.scheduleTour },
        ],
      },
      {
        subheader: 'Visit Us',
        items: [
          { title: 'Compus Locations', path: PATH_PAGE.faqNew },
          { title: 'Virtual Tours', path: PATH_PAGE.scheduleTour },
          { title: 'Schedule a Visit', path: PATH_PAGE.scheduleTour },
        ],
      },
      {
        subheader: 'Resources',
        items: [
          { title: 'FAQ', path: PATH_PAGE.faqNew },
          // { title: 'Schedule a Tour', path: PATH_PAGE.scheduleTour }, delete this
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
