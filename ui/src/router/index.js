import {
    PagesConnect,
    FacebookPixel,
    AdAccountConnect,
    FacebookAdSet,
    FacebookAds
} from '../container/facebook'
import {
    DisconnectAds,
    LandingPage,
    DashBoard,
    OnBoardingProcess,
} from '../container/common';

export const allRoutes = [
    '/ads',
    '/ads/dashboard',
    '/ads/onboarding',
    '/ads/onboarding-process',
    '/ads/facebook/connect',
    '/ads/facebook/lead-sync',
    '/ads/facebook/pixel',
    '/ads/facebook/adset',
    '/ads/facebook/ads-list',
    '/ads/disconnect-ad-account'
]

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
        path: "/ads/facebook/adset/:campaignID",
        exact: true,
        component: FacebookAdSet
    },
    {
        path: "/ads/facebook/ads-list",
        exact: true,
        component: FacebookAds
    },
    // {
    //     path: "/ads/disconnect-ad-account",
    //     exact: true,
    //     component: DisconnectAds
    // }
];

export default routes