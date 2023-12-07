//import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
//import { AppDetails, CreateForm, Home, Login, NoPage, Profile, Search, Signup, UpdateProfile, UserDetail } from './components/Base'
//import ScrollToTop from "./components/helpers/ScrollToTop";
//import UpdateAppDetail from "./components/UpdateAppDetail";
//import UpdateAppScreenshot from "./components/UpdateAppScreenshot";
//import UpdateAppBasicInfo from "./components/UpdateAppBasicInfo";
//import UpdateAppCategory from "./components/UpdateAppCategory";
//import UpdateAppDownloadLinks from "./components/UpdateAppDownloadLinks";
//import UpdateAppLogo from "./components/UpdateAppLogo";
//import UpdateAppScreenshotDelete from "./components/UpdateAppScreenshotDelete";
//import UpdateAppScreenshotView from "./components/UpdateAppScreenshotView";
//import UpdateAppScreenshotNew from "./components/UpdateAppScreenshotNew";
//import UpdateAppScreenshotReplace from "./components/UpdateAppScreenshotReplace";
//import ProfileView from "./components/ProfileView";
//import UpdateProfileBasicInfo from "./components/UpdateProfileBasicInfo";
//import UpdateProfileSocialInfo from "./components/UpdateProfileSocialInfo";
//import UpdateProfilePicture from "./components/UpdateProfilePicture";
//import PasswordReset from "./components/PasswordReset";
//import VerifyPasswordReset from "./components/VerifyPasswordReset";
//import VerifyUser from "./components/VerifyUser";
//import ChangePassword from "./components/ChangePassword";
//import ChangePasswordSuccessful from "./components/ChangePasswordSuccessful";
//import Terms from "./components/Terms";
//import UserApps from "./components/UserApps";
//import DeleteApp from "./components/DeleteApp";
//import SetPasswordSuccessful from "./components/SetPasswordSuccessful";
//import SetPassword from "./components/SetPassword";
//import ErrorPage from './components/ErrorPage';
//import { loader as appDetailLoader } from "./components/AppDetailFragment";
//import { loader as profileLoader } from "./components/Profile";
import Home, { appLoader } from './pages/Home';
import { loader as meLoader } from "./pages/Root";
//import { loader as userDetailLoader } from "./components/UserDetail";
//// import { loader as updateProfileLoader } from "./components/UpdateProfile";
//// import { loader as profileViewLoader } from "./components/ProfileView";
//import { loader as userAppsLoader } from "./components/UserApps";
//import Root from './components/Root';
//import About from './components/About';
//import { ErrorBoundary, ErrorFallback } from './components/helpers/utils';
//import Privacy from './components/Privacy';


import { ErrorBoundary, ErrorFallback } from "./helpers/utils";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import CreatePage from './pages/CreatePage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route id={"root"} path="/" element={<Root />} errorElement={<ErrorPage />} loader={meLoader}>
            <Route index element={<Home />} loader={appLoader} />
            <Route id={"createApp"} path="new" element={<CreatePage />} />
            {/*<Route id={"appDetail"} path="app/:appNameId" element={<AppDetails />} render={props => <AppDetails {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />} />*/}
            {/*<Route id={"deleteApp"} path="app/:appNameId/delete" element={<DeleteApp />} render={props => <DeleteApp {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />} />*/}
            {/*<Route id={"updateApp"} path="app/:appNameId/update" element={<UpdateAppDetail />} render={props => <UpdateAppDetail {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />}></Route>*/}
            {/*<Route id={"updateAppLogo"} path={"app/:appNameId/update/logo"} element={<UpdateAppLogo />} render={props => <UpdateAppLogo {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />}></Route>*/}
            {/*<Route id={"updateAppBasicInfo"} path={"app/:appNameId/update/basic-info"} element={<UpdateAppBasicInfo />} render={props => <UpdateAppBasicInfo {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />}></Route>*/}
            {/*<Route id={"updateAppScreenshot"} path={"app/:appNameId/update/screenshots"} element={<UpdateAppScreenshot />} render={props => <UpdateAppScreenshot {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />}></Route>*/}
            {/*<Route id={"updateAppNewScreenshot"} path={"app/:appNameId/update/screenshots/new"} element={<UpdateAppScreenshotNew />} render={props => <UpdateAppScreenshotNew />} loader={appDetailLoader} errorElement={<ErrorPage />}></Route>*/}
            {/*<Route id={"updateAppScreenshotId"} path={"app/:appNameId/update/screenshots/:screenshotId"} element={<UpdateAppScreenshotView />} render={props => <UpdateAppScreenshotView {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />}></Route>*/}
            {/*<Route id={"updateAppScreenshotReplace"} path={"app/:appNameId/update/screenshots/:screenshotId/replace"} element={<UpdateAppScreenshotReplace />} render={props => <UpdateAppScreenshotReplace {...props.match.params} />} loader={appDetailLoader} errorElement={<ErrorPage />}></Route>*/}
            {/*<Route id={"updateAppScreenshotDelete"} path={"app/:appNameId/update/screenshots/:screenshotId/delete"} element={<UpdateAppScreenshotDelete />} render={props => <UpdateAppScreenshotDelete {...props.match.params} />} loader={appDetailLoader}></Route>*/}
            {/*<Route id={"updateAppCategory"} path={"app/:appNameId/update/category"} element={<UpdateAppCategory />} render={props => <UpdateAppCategory {...props.match.params} />} loader={appDetailLoader}></Route>*/}
            {/*<Route id={"updateAppDownloadLinks"} path={"app/:appNameId/update/download-links"} element={<UpdateAppDownloadLinks />} render={props => <UpdateAppDownloadLinks {...props.match.params} />} loader={appDetailLoader}></Route>*/}
            {/*<Route id={"signup"} path="signup" element={<Signup />} />*/}
            {/*<Route id={"verifyUser"} path="verify-user" element={<VerifyUser />} />*/}
            {/*<Route id={"login"} path="login" element={<Login />} />*/}
            {/*<Route id={"forgotPassword"} path="forgot-password" element={<PasswordReset />} />*/}
            {/*<Route id={"verifyPasswordReset"} path="verify-password-reset" element={<VerifyPasswordReset />} />*/}
            {/*<Route id={"setPassword"} path="set-password" element={<SetPassword />} />*/}
            {/*<Route id={"setPasswordSuccess"} path="set-password/success" element={<SetPasswordSuccessful />} />*/}
            {/*<Route id={"changePassword"} path="change-password" element={<ChangePassword />} render={props => <ChangePassword id={props.match.params.id} />} />*/}
            {/*<Route id={"changePasswordSuccessful"} path="change-password-successful" element={<ChangePasswordSuccessful />} />*/}
            <Route id={"search"} path="search" element={<Search />} />
            {/*<Route id={"profile"} path="profile" element={<Profile />} loader={profileLoader} />*/}
            {/*{/*<Route path="profile/update" element={<UpdateProfile/>}/>*/}
            {/*<Route id={"profileView"} path="profile/update" element={<ProfileView />} loader={profileLoader} />*/}
            {/*<Route id={"updateProfilePicture"} path={"profile/update/picture"} element={<UpdateProfilePicture />} loader={meLoader} />*/}
            {/*<Route id={"updateProfileBasicInfo"} path={"profile/update/basic-info"} element={<UpdateProfileBasicInfo />} loader={meLoader} />*/}
            {/*<Route id={"updateProfileSocialInfo"} path={"profile/update/social-info"} element={<UpdateProfileSocialInfo />} loader={meLoader} />*/}
            {/*<Route id={"userDetail"} path="user/:id" element={<UserDetail />} render={props => <UserDetail {...props.match.params} />} loader={userDetailLoader} />*/}
            {/*<Route id={"userApps"} path="user/:id/apps" element={<UserApps />} render={props => <UserApps {...props.match.params} />} loader={userAppsLoader} />*/}
            {/*<Route id={"terms"} path={"terms"} element={<Terms />} />*/}
            {/*<Route id={"privacy"} path={"privacy"} element={<Privacy />} />*/}
            {/*<Route id={"about"} path={"about"} element={<About />} />*/}
            {/*<Route id={"noPage"} path="*" element={<NoPage />} />*/}
        </Route>
    )
)

export default function NineRoutes() {
    return (
        <ErrorBoundary fallbackComponent={ErrorFallback}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    )
}