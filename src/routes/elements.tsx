import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));
export const RegisterPage = Loadable(lazy(() => import('../pages/auth/RegisterPage')));
export const VerifyCodePage = Loadable(lazy(() => import('../pages/auth/VerifyCodePage')));
export const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPasswordPage')));
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));

// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
export const FaqsPage = Loadable(lazy(() => import('../pages/FaqsPage')));
export const AboutPage = Loadable(lazy(() => import('../pages/AboutPage')));
export const Contact = Loadable(lazy(() => import('../pages/ContactPage')));
export const PricingPage = Loadable(lazy(() => import('../pages/PricingPage')));
export const PaymentPage = Loadable(lazy(() => import('../pages/PaymentPage')));
export const ComingSoonPage = Loadable(lazy(() => import('../pages/ComingSoonPage')));
export const MaintenancePage = Loadable(lazy(() => import('../pages/MaintenancePage')));

// Programs pages
export const UpcommingClassesPage = Loadable(lazy(() => import('../pages/UpcommingClasses')));
export const CourseCatalogPage = Loadable(lazy(() => import('../pages/CourseCatalog')));
export const SoftSkillsPage = Loadable(lazy(() => import('../pages/SoftSkills')));
export const ComplianceTestingPage = Loadable(lazy(() => import('../pages/ComplianceTesting')));
export const AutomationPage = Loadable(lazy(() => import('../pages/Automation')));
export const SecurityTestingPage = Loadable(lazy(() => import('../pages/SecurityTesting')));
export const ComptiaPage = Loadable(lazy(() => import('../pages/Comptia')));
export const IstqbPage = Loadable(lazy(() => import('../pages/Istqb')));
export const OraclePage = Loadable(lazy(() => import('../pages/Oracle')));
export const ScrumAlliancePage = Loadable(lazy(() => import('../pages/ScrumAlliance')));
export const IcaPage = Loadable(lazy(() => import('../pages/Ica')));
export const IsqiPage = Loadable(lazy(() => import('../pages/Isqi')));
export const Selenium = Loadable(lazy(() => import('../pages/Selenium')));
export const AsqPage = Loadable(lazy(() => import('../pages/Asq')));

// Admission Pages
export const EnrollmentRequirmentPage = Loadable(
  lazy(() => import('../pages/EnrollmentRequirment'))
);
export const EnrollmentProcessPage = Loadable(lazy(() => import('../pages/EnrollmentProcess')));
export const FinancialAidPrograms = Loadable(lazy(() => import('../pages/FinancialAidProgram')));
export const TekAidPartners = Loadable(lazy(() => import('../pages/TekAidPartners')));

export const InternationalStudnetsPage = Loadable(
  lazy(() => import('../pages/InternationalStudents'))
);
export const FinancialAidRequirmentPage = Loadable(
  lazy(() => import('../pages/FinancialAidRequirment'))
);
export const WomenForAfghanWomenPage = Loadable(lazy(() => import('../pages/Waw')));
export const AfghanAmericanOrganizationPage = Loadable(lazy(() => import('../pages/Aao')));
export const AfghanAmericanFoundationPage = Loadable(lazy(() => import('../pages/Aaf')));
// Resources pages
export const CertificateVerificationPage = Loadable(
  lazy(() => import('../pages/CertificateVerification'))
);
export const LearningResourcesPage = Loadable(lazy(() => import('../pages/LearningResources')));
export const CommunityForumsPage = Loadable(lazy(() => import('../pages/CommunityForums')));
export const CareerResourcesPage = Loadable(lazy(() => import('../pages/CareerResources')));
export const WebinarsAndWorkShopPage = Loadable(lazy(() => import('../pages/Webinars&Workshops')));
export const BlogsPage = Loadable(lazy(() => import('../pages/Blogs')));
export const PodcastsPage = Loadable(lazy(() => import('../pages/Podcasts')));

export const ProfessionalNetworkingEventsPage = Loadable(
  lazy(() => import('../pages/ProfessionalNetworkingEvents'))
);
export const JobMarketSupportServicesPage = Loadable(
  lazy(() => import('../pages/JobMarketSupportServices'))
);
export const MembershipBenefitsPage = Loadable(lazy(() => import('../pages/MembershipBenefits')));
export const PlatformFeaturesPage = Loadable(lazy(() => import('../pages/PlatformFeatures')));
export const DiscussionForumsPage = Loadable(lazy(() => import('../pages/DiscussionForums')));
// About US pages
export const OurTeamPage = Loadable(lazy(() => import('../pages/OurTeam')));
export const OurStoryPage = Loadable(lazy(() => import('../pages/OurStory')));
export const MediaCoveragePage = Loadable(lazy(() => import('../pages/MediaCoverage')));
export const StudentStoriesPage = Loadable(lazy(() => import('../pages/StudentStories')));
export const StudentActivitiesPage = Loadable(lazy(() => import('../pages/StudentActivities')));
export const DoingBusinessPage = Loadable(lazy(() => import('../pages/DoingBusiness')));
export const SocialImpactPage = Loadable(lazy(() => import('../pages/SocialImpact')));

export const MissionAndVisionAndValuesPage = Loadable(
  lazy(() => import('../pages/Mission&Vision&Values'))
);
export const AccreditationPage = Loadable(lazy(() => import('../pages/Accreditation')));
export const FacilitiesPage = Loadable(lazy(() => import('../pages/Facilities')));
export const MentorshipSupportPage = Loadable(lazy(() => import('../pages/MentorshipSupport')));
// Contact Us pages
export const ScheduleTourPage = Loadable(lazy(() => import('../pages/ScheduleTour')));
export const ContactInformationPage = Loadable(lazy(() => import('../pages/ContactInformation')));
// Apply Now pages
export const ApplyNowPage = Loadable(lazy(() => import('../pages/ApplyNow')));

// DEMO COMPONENTS
// ----------------------------------------------------------------------

export const ComponentsOverviewPage = Loadable(
  lazy(() => import('../pages/components/ComponentsOverviewPage'))
);
// FOUNDATION
export const FoundationColorsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationColorsPage'))
);
export const FoundationTypographyPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationTypographyPage'))
);
export const FoundationShadowsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationShadowsPage'))
);
export const FoundationGridPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationGridPage'))
);
export const FoundationIconsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationIconsPage'))
);
// MUI COMPONENTS
export const MUIAccordionPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIAccordionPage'))
);
export const MUIAlertPage = Loadable(lazy(() => import('../pages/components/mui/MUIAlertPage')));
export const MUIAutocompletePage = Loadable(
  lazy(() => import('../pages/components/mui/MUIAutocompletePage'))
);
export const MUIAvatarPage = Loadable(lazy(() => import('../pages/components/mui/MUIAvatarPage')));
export const MUIBadgePage = Loadable(lazy(() => import('../pages/components/mui/MUIBadgePage')));
export const MUIBreadcrumbsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIBreadcrumbsPage'))
);
export const MUIButtonsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIButtonsPage'))
);
export const MUICheckboxPage = Loadable(
  lazy(() => import('../pages/components/mui/MUICheckboxPage'))
);
export const MUIChipPage = Loadable(lazy(() => import('../pages/components/mui/MUIChipPage')));
export const MUIDataGridPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIDataGridPage'))
);
export const MUIDialogPage = Loadable(lazy(() => import('../pages/components/mui/MUIDialogPage')));
export const MUIListPage = Loadable(lazy(() => import('../pages/components/mui/MUIListPage')));
export const MUIMenuPage = Loadable(lazy(() => import('../pages/components/mui/MUIMenuPage')));
export const MUIPaginationPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPaginationPage'))
);
export const MUIPickersPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPickersPage'))
);
export const MUIPopoverPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPopoverPage'))
);
export const MUIProgressPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIProgressPage'))
);
export const MUIRadioButtonsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIRadioButtonsPage'))
);
export const MUIRatingPage = Loadable(lazy(() => import('../pages/components/mui/MUIRatingPage')));
export const MUISliderPage = Loadable(lazy(() => import('../pages/components/mui/MUISliderPage')));
export const MUIStepperPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIStepperPage'))
);
export const MUISwitchPage = Loadable(lazy(() => import('../pages/components/mui/MUISwitchPage')));
export const MUITablePage = Loadable(lazy(() => import('../pages/components/mui/MUITablePage')));
export const MUITabsPage = Loadable(lazy(() => import('../pages/components/mui/MUITabsPage')));
export const MUITextFieldPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITextFieldPage'))
);
export const MUITimelinePage = Loadable(
  lazy(() => import('../pages/components/mui/MUITimelinePage'))
);
export const MUITooltipPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITooltipPage'))
);
export const MUITransferListPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITransferListPage'))
);
export const MUITreesViewPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITreesViewPage'))
);

// EXTRA
export const DemoAnimatePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoAnimatePage'))
);
export const DemoCarouselsPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoCarouselsPage'))
);
export const DemoChartsPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoChartsPage'))
);
export const DemoCopyToClipboardPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoCopyToClipboardPage'))
);
export const DemoEditorPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoEditorPage'))
);
export const DemoFormValidationPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoFormValidationPage'))
);
export const DemoImagePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoImagePage'))
);
export const DemoLabelPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoLabelPage'))
);
export const DemoLightboxPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoLightboxPage'))
);
export const DemoMapPage = Loadable(lazy(() => import('../pages/components/extra/DemoMapPage')));
export const DemoMegaMenuPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMegaMenuPage'))
);
export const DemoMultiLanguagePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMultiLanguagePage'))
);
export const DemoNavigationBarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoNavigationBarPage'))
);
export const DemoOrganizationalChartPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoOrganizationalChartPage'))
);
export const DemoScrollbarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoScrollbarPage'))
);
export const DemoSnackbarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoSnackbarPage'))
);
export const DemoTextMaxLinePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoTextMaxLinePage'))
);
export const DemoUploadPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoUploadPage'))
);
export const DemoMarkdownPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMarkdownPage'))
);
