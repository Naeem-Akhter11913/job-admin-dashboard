import Masonry from "@mui/lab/Masonry"
import AboutCompany from "../components/UserProfile/AboutCompany"
import CompanyAddress from "../components/UserProfile/CompanyAddress"
import CompanyInformation from "../components/UserProfile/CompanyInformation"
import SocialLinks from "../components/UserProfile/SocialLinks"
import Branding from "../components/UserProfile/Branding"
import CoverImage from "../components/UserProfile/CoverImage"
import SocialLinksHeader from "../components/SocialLinksHeader"

const UserProfiles = () => {
  return (
    <Masonry columns={2} spacing={2}>
      <CompanyInformation />
      <SocialLinks />
      <AboutCompany />
      <CompanyAddress />
      <Branding />
      <CoverImage />
      <SocialLinksHeader />
    </Masonry>
  )
}

export default UserProfiles