import EmailTemplates from "../components/Settings/EmailTemplates"
import JobPreferences from "../components/Settings/JobPreferences"
import NotificationsControll from "../components/Settings/NotificationsControll"
import SecuritySettings from "../components/Settings/SecuritySettings"
import Subscription from "../components/Settings/Subscription";
import Masonry from "@mui/lab/Masonry";
import SocialLinksHeader from "../components/SocialLinksHeader";

const Settings = () => {
  return (
    <Masonry columns={2} spacing={2}>
      <JobPreferences />
      <EmailTemplates />
      <SecuritySettings />
      <NotificationsControll />
      <Subscription />
      <SocialLinksHeader />

    </Masonry>
  )
}

export default Settings