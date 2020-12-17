import {
    PagesConnect,
    FacebookPixel,
    AdAccountConnect,
    FacebookAdSet,
    FacebookAds
} from '../container/facebook'
import {
    LandingPage,
    DashBoard,
    OnBoardingProcess
} from '../container/common';

const routes = [
    {
        path: "/ads/dashboard",
        exact: true,
        component: DashBoard
    },
    {
        path: "/ads/onboarding",
        exact: true,
        component: LandingPage
    },
    {
        path: "/ads/onboarding-process",
        exact: true,
        component: OnBoardingProcess
    },
    {
        path: "/ads/facebook/connect",
        exact: true,
        component: AdAccountConnect
    },
    {
        path: "/ads/facebook/lead-sync",
        exact: true,
        component: PagesConnect
    },
    {
        path: "/ads/facebook/pixel",
        exact: true,
        component: FacebookPixel
    },
    {
        path: "/ads/facebook/adset",
        exact: true,
        component: FacebookAdSet
    },
    {
        path: "/ads/facebook/ads-list",
        exact: true,
        component: FacebookAds
    }
];

export default routes