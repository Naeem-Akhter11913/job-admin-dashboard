import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import UserProfiles from "./pages/UserProfiles";
import PostAJob from "./pages/PostAJob";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import ThemeTogglerTwo from "./components/common/ThemeTogglerTwo";
import JobListing from "./pages/JobListing";
import ViewJobApplication from "./pages/ViewJobApplication";
import CandidateChats from "./pages/CandidateChats";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />

            {/* Others Page */}
            <Route path="profile" element={<UserProfiles />} />
            <Route path="post-job" element={<PostAJob />} />
            <Route path="job-listing" element={<JobListing />} />
            <Route path="view-application" element={<ViewJobApplication />} />
            <Route path="candidate-chats" element={<CandidateChats />} />
            <Route path="settings" element={<Settings />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
      <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
        <ThemeTogglerTwo />
      </div>
    </>
  );
}
